import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();

    const { email, firstName, lastName, products } = data;

    const discountPercent = 20; // 20% discount

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Calculate product subtotals and total
    let total = 0;
    const productRows = products.map((p: any) => {
        const originalPrice = p.price;
        const subtotal = originalPrice * p.qty * (1 - discountPercent / 100);
        total += subtotal;
        return `
        <tr>
            <td align="left" style="padding:5px;border:1px solid #ddd;">${p.name}</td>
            <td align="center" style="padding:5px;border:1px solid #ddd;">${p.qty}</td>
            <td align="center" style="padding:5px;border:1px solid #ddd;">Rs.${originalPrice}</td>
            <td align="center" style="padding:5px;border:1px solid #ddd;">${discountPercent}%</td>
            <td align="center" style="padding:5px;border:1px solid #ddd;">Rs.${subtotal.toFixed(2)}</td>
        </tr>`;
    }).join("");

    const html = `
    <div style="font-family:sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:10px;">
        <h2 style="color:#009B7A;">🎉 Thank you for your order, ${firstName} ${lastName}!</h2>
        <p>Your order has been placed successfully and will be delivered within 24hrs</p>
        <h3>Order Details:</h3>
        <table style="width:100%; border-collapse:collapse;">
            <thead>
                <tr>
                    <th align="left" style="border:1px solid #ddd; padding:5px;">Product</th>
                    <th align="center" style="border:1px solid #ddd; padding:5px;">Qty</th>
                    <th align="center" style="border:1px solid #ddd; padding:5px;">Price</th>
                    <th align="center" style="border:1px solid #ddd; padding:5px;">Discount</th>
                    <th align="center" style="border:1px solid #ddd; padding:5px;">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                ${productRows}
            </tbody>
        </table>
        <p style="text-align:right; font-weight:bold;">Total: Rs.${total.toFixed(2)}</p>
    </div>
    `;

    try {
        await transporter.sendMail({
            from: `"AvantPharma" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Your AvantPharma Order Confirmation",
            html,
        });
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false });
    }
}
