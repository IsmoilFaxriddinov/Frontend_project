'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import toast from 'react-hot-toast';

export default function EditPostPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${id}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Post topilmadi');
        const data = await res.json();
        setTitle(data.title);
        setBody(data.body);
      } catch (err) {
        toast.error("❌ Post topilmadi");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body }),
      });

      if (!res.ok) throw new Error('Xatolik');
      toast.success("✅ Post muvaffaqiyatli tahrirlandi!");
      setTimeout(() => router.push('/posts'), 1500);
    } catch {
      toast.error("❌ Saqlashda xatolik yuz berdi");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center mt-20">Yuklanmoqda...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-5 p-8 backdrop-blur-md bg-white/70 border border-white/30 shadow-2xl rounded-3xl mt-14 animate-fade-in"
    >
      <h1 className="text-2xl font-bold text-gray-800">✏️ Postni tahrirlash</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post sarlavhasi"
        className="w-full px-4 py-3 rounded-xl bg-white border border-indigo-200 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        required
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post matni"
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-white h-32 resize-none border border-indigo-200 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        required
      />

      <button
        type="submit"
        disabled={saving}
        className={`w-full py-3 rounded-xl font-semibold shadow-md transition ${
          saving
            ? 'bg-indigo-300 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-500 to-indigo-700 hover:brightness-110 hover:scale-[1.02]'
        }`}
      >
        {saving ? '⏳ Saqlanmoqda...' : '💾 Saqlash'}
      </button>
    </form>
  );
}
