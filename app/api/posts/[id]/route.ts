import { NextRequest, NextResponse } from 'next/server';
import { posts } from '../route';

type Post = {
  id: number;
  title: string;
  body: string;
};

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = Number(params.id);
  if (Number.isNaN(postId)) {
    return NextResponse.json({ error: 'ID noto‘g‘ri' }, { status: 400 });
  }

  const index = posts.findIndex((p: any) => p.id === postId);
  if (index === -1) {
    return NextResponse.json({ error: 'Post topilmadi' }, { status: 404 });
  }

  try {
    const body = await req.json();
    posts[index] = {
      ...posts[index],
      title: body.title,
      body: body.body,
    };

    return NextResponse.json({ message: 'Post tahrirlandi', post: posts[index] }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Server xatosi' }, { status: 500 });
  }
}

// ✅ Qo‘shilgan: DELETE method
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = Number(params.id);
  if (Number.isNaN(postId)) {
    return NextResponse.json({ error: 'ID noto‘g‘ri' }, { status: 400 });
  }

  const index = posts.findIndex((p: any) => p.id === postId);
  if (index === -1) {
    return NextResponse.json({ error: 'Post topilmadi' }, { status: 404 });
  }

  posts.splice(index, 1);

  return NextResponse.json({ message: 'Post o‘chirildi' }, { status: 200 });
}
