'use client';

import { devNull } from 'os';
import { useEffect, useState } from 'react';

async function getPosts() {
  const res = await fetch("/api/posts", { cache: "no-store" });
  if (!res.ok) throw new Error("Postlarni olishda xatolik yuz berdi");
  return res.json();
}

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts(posts.filter((post) => post.id !== id));
    } else {
      alert("❌ O‘chirishda xatolik yuz berdi.");
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-600 animate-pulse">Yuklanmoqda...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-5">
      {/* 🔙 Orqaga tugma */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📚 Barcha Postlar</h1>
        <a
          href="/create"
          className="bg-gradient-to-r from-indigo-200 to-indigo-400 hover:from-indigo-300 hover:to-indigo-500 text-indigo-800 px-4 py-2 rounded-xl text-sm font-semibold shadow transition-all"
        >
          ➕ Yangi post
        </a>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 italic text-center mt-20">🚫 Hozircha hech qanday post yo‘q.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="group p-5 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[1.02] hover:bg-indigo-50 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-1">{post.body}</p>
              </div>
              <div className="flex gap-3 mt-1 text-lg">
                <a
                  href={`/posts/edit/${post.id}`}
                  className="text-blue-500 hover:text-blue-700 transition"
                  title="Tahrirlash"
                >
                  ✏️
                </a>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Postni o‘chirish"
                >
                  🗑
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}