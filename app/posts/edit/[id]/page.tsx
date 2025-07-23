'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditPostPage() {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch('/api/posts', { cache: 'no-store' });
        const data = await res.json();
        const post = data.find((p: any) => p.id === Number(id));
        if (post) {
          setTitle(post.title);
          setBody(post.body);
        } else {
          setMessage('Post topilmadi');
        }
      } catch (err) {
        setMessage('Xatolik yuz berdi');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body }),
      });

      if (res.ok) {
        router.push('/posts');
      } else {
        setMessage('❌ Tahrirlashda xatolik yuz berdi');
      }
    } catch (err) {
      setMessage('❌ Server bilan aloqa yo‘q');
    }
  };

  if (loading) return <p className="text-center mt-10">Yuklanmoqda...</p>;

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-xl mx-auto space-y-5 p-8 mt-12 bg-white rounded-2xl shadow-lg"
    >
      <h1 className="text-2xl font-bold text-gray-800">✏️ Postni tahrirlash</h1>

      {message && (
        <p className="text-center text-red-500 font-medium">{message}</p>
      )}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Yangi sarlavha"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Yangi matn"
        rows={5}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        💾 Saqlash
      </button>
    </form>
  );
}
