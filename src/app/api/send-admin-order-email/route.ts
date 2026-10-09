// import nodemailer from "nodemailer";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//     const data = await req.json();

//     const {
//         firstName,
//         lastName,
//         phone,
//         email,
//         address,
//         city,
//         products,
//     } = data;

//     const DISCOUNT_PERCENT = 20;

//     const transporter = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: Number(process.env.SMTP_PORT),
//         secure: true,
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS,
//         },
//     });

//     let grandTotal = 0;

//     const productRows = products
//         .map((p: any) => {
//             const original = p.price * p.qty;
//             const discounted = original * (1 - DISCOUNT_PERCENT / 100);
//             grandTotal += discounted;

//             return `
//                 <tr>
//                     <td style="border-bottom:1px solid #e5e7eb;border-right:1px solid #d1d5db">
//                         ${p.name}
//                     </td>
//                     <td align="center" style="border-bottom:1px solid #e5e7eb;border-right:1px solid #d1d5db">
//                         ${p.qty}
//                     </td>
//                     <td align="center" style="border-bottom:1px solid #e5e7eb;border-right:1px solid #d1d5db">
//                         Rs.${p.price}
//                     </td>
//                     <td align="center" style="border-bottom:1px solid #e5e7eb;border-right:1px solid #d1d5db">
//                         20%
//                     </td>
//                     <td align="center" style="border-bottom:1px solid #e5e7eb;font-weight:600">
//                         Rs.${discounted.toFixed(2)}
//                     </td>
//                 </tr>
//             `;


//         })
//         .join("");

//     const html = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         </head>

//         <body style="margin:0;padding:0;">
//         <div style="background:#f3f6f9;padding:20px 10px;font-family:'Segoe UI',Arial,sans-serif">
//         <table width="100%" cellpadding="0" cellspacing="0">
//             <tr>
//             <td align="center">

//                 <table width="100%" cellpadding="0" cellspacing="0"
//                 style="max-width:720px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08)">

//                 <!-- HEADER -->
//                 <tr>
//                     <td style="background:#009B7A;padding:22px 20px">
//                     <h1 style="margin:0;color:#ffffff;font-size:22px;letter-spacing:.3px">
//                         AvantPharma
//                     </h1>
//                     <p style="margin:4px 0 0;color:#e6fffa;font-size:13px">
//                         New Order Notification
//                     </p>
//                     </td>
//                 </tr>

//                 <!-- CUSTOMER INFO -->
//                 <tr>
//                     <td style="padding:22px 20px">
//                     <h2 style="margin:0 0 14px;color:#111;font-size:18px">
//                         🛒 New Order Received
//                     </h2>

//                     <table width="100%" cellpadding="0" cellspacing="0"
//                         style="font-size:14px;color:#333">
//                         <tr>
//                         <td style="padding:6px 0;width:110px"><b>Customer</b></td>
//                         <td>${firstName} ${lastName}</td>
//                         </tr>
//                         <tr>
//                         <td style="padding:6px 0"><b>Phone</b></td>
//                         <td>${phone}</td>
//                         </tr>
//                         <tr>
//                         <td style="padding:6px 0"><b>Email</b></td>
//                         <td style="word-break:break-all">${email}</td>
//                         </tr>
//                         <tr>
//                         <td style="padding:6px 0"><b>Address</b></td>
//                         <td>${address}, ${city}</td>
//                         </tr>
//                     </table>
//                     </td>
//                 </tr>

//                 <!-- ORDER TABLE -->
//                 <tr>
//                     <td style="padding:0 20px 22px">
//                     <div style="overflow-x:auto;">
//                         <table width="100%" cellpadding="10" cellspacing="0"
//                         style="border-collapse:collapse;font-size:14px;min-width:600px;border:1px solid #d1d5db">
//                         <thead>
//                             <tr style="background:#f0fdf9">
//                             <th align="left" style="border:1px solid #d1d5db">Product</th>
//                             <th align="center" style="border:1px solid #d1d5db">Qty</th>
//                             <th align="center" style="border:1px solid #d1d5db">Price</th>
//                             <th align="center" style="border:1px solid #d1d5db">Discount</th>
//                             <th align="center" style="border:1px solid #d1d5db">Subtotal</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             ${productRows}
//                         </tbody>
//                         </table>
//                     </div>
//                     </td>
//                 </tr>

//                 <!-- TOTAL -->
//                 <tr>
//                     <td style="padding:18px 20px;border-top:1px solid #e5e7eb">
//                     <table width="100%" cellpadding="0" cellspacing="0">
//                         <tr>
//                         <td style="font-size:16px;font-weight:600">Grand Total</td>
//                         <td align="right"
//                             style="font-size:18px;font-weight:700;color:#009B7A">
//                             Rs.${grandTotal.toFixed(2)}
//                         </td>
//                         </tr>
//                     </table>
//                     </td>
//                 </tr>

//                 <!-- FOOTER -->
//                 <tr>
//                     <td style="background:#f9fafb;padding:14px 20px;font-size:12px;color:#6b7280">
//                     <p style="margin:0">
//                         Order Time (PK):
//                         ${new Date().toLocaleString("en-PK", {
//                         timeZone: "Asia/Karachi",
//                     })}
//                     </p>
//                     <p style="margin:6px 0 0">
//                         This order was placed via AvantPharma website.
//                     </p>
//                     </td>
//                 </tr>

//                 </table>

//             </td>
//             </tr>
//         </table>
//         </div>
//         </body>
//         </html>
//         `;


//     try {
//         await transporter.sendMail({
//             from: `"AvantPharma Orders" <${process.env.SMTP_USER}>`,
//             to: process.env.ADMIN_EMAIL!, // 👈 YOUR EMAIL
//             subject: "🛒 New Order Received – AvantPharma",
//             html,
//         });

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ success: false });
//     }
// }
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();

    const {
        email,
        firstName,
        lastName,
        products,
        discountPercent = 0,
        grandTotal = 0,
    } = data;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Calculate subtotal (without discount)
    let subtotal = 0;

    const productRows = products
        .map((p: any) => {
            const price = Number(p.price);
            const qty = Number(p.qty);
            const lineSubtotal = price * qty;
            subtotal += lineSubtotal;

            return `
        <tr>
            <td align="left" style="padding:8px;border:1px solid #ddd;">${p.name}</td>
            <td align="center" style="padding:8px;border:1px solid #ddd;">${qty}</td>
            <td align="center" style="padding:8px;border:1px solid #ddd;">Rs.${price.toLocaleString()}</td>
            <td align="center" style="padding:8px;border:1px solid #ddd;">Rs.${lineSubtotal.toLocaleString()}</td>
        </tr>`;
        })
        .join("");

    const discountAmount = subtotal * (Number(discountPercent) / 100);

    const html = `
    <div style="font-family:sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:10px;">
        <h2 style="color:#009B7A;">🎉 Thank you for your order, ${firstName} ${lastName}!</h2>
        <p>Your order has been placed successfully and will be delivered within 24hrs</p>
        <h3>Order Details:</h3>
        <table style="width:100%; border-collapse:collapse;">
            <thead>
                <tr>
                    <th align="left" style="border:1px solid #ddd; padding:8px;">Product</th>
                    <th align="center" style="border:1px solid #ddd; padding:8px;">Qty</th>
                    <th align="center" style="border:1px solid #ddd; padding:8px;">Price</th>
                    <th align="center" style="border:1px solid #ddd; padding:8px;">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                ${productRows}
            </tbody>
        </table>

        <table style="width:100%; margin-top:15px; font-size:14px;">
            <tr>
                <td style="padding:4px 0;">Subtotal</td>
                <td align="right" style="padding:4px 0;">Rs.${subtotal.toLocaleString()}</td>
            </tr>
            ${
                Number(discountPercent) > 0
                    ? `
            <tr>
                <td style="padding:4px 0; color:#059669;">Discount (${discountPercent}%)</td>
                <td align="right" style="padding:4px 0; color:#059669;">- Rs.${discountAmount.toLocaleString()}</td>
            </tr>`
                    : ""
            }
            <tr>
                <td style="padding:10px 0 0; font-weight:bold; font-size:16px; border-top:1px solid #ddd;">Grand Total</td>
                <td align="right" style="padding:10px 0 0; font-weight:bold; font-size:16px; color:#009B7A; border-top:1px solid #ddd;">
                    Rs.${Number(grandTotal).toLocaleString()}
                </td>
            </tr>
        </table>
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