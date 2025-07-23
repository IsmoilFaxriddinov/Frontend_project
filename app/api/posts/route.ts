import { NextRequest, NextResponse } from 'next/server';

type Post = {
  id: number;
  title: string;
  body: string;
};

// IDni saqlovchi counter
let nextId = 1;

// ✅ Endi posts massivida ID bo‘ladi
export let posts: Post[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const newPost: Post = {
      id: nextId++, // har safar yangi ID beradi
      title: body.title,
      body: body.body,
    };

    posts.push(newPost);

    return NextResponse.json({ message: 'Post qabul qilindi!', post: newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Xatolik yuz berdi' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(posts, { status: 200 });
}
