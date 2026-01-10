import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "comments.json");

// Read comments
function readComments() {
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify([]));
    }

    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

// Write comments
function writeComments(comments: any[]) {
    fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));
}

// GET COMMENTS
export async function GET() {
    const comments = readComments();
    return NextResponse.json(comments);
}

// POST COMMENT
export async function POST(req: Request) {
    const body = await req.json();
    const comments = readComments();

    const newComment = {
        id: Date.now(),
        name: body.name,
        text: body.text,
        userId: body.userId,
    };

    comments.push(newComment);
    writeComments(comments);

    return NextResponse.json(newComment);
}

// DELETE COMMENT (OWNER ONLY)
export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));
    const userId = searchParams.get("userId");

    let comments = readComments();
    const comment = comments.find((c: any) => c.id === id);

    if (!comment || comment.userId !== userId) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 403 }
        );
    }

    comments = comments.filter((c: any) => c.id !== id);
    writeComments(comments);

    return NextResponse.json({ success: true });
}
