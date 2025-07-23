"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      if (res.ok) {
        toast.success("✅ Post muvaffaqiyatli yuborildi!");
        setTitle("");
        setBody("");
        setTimeout(() => router.push('/posts'), 1500);
      } else {
        toast.error("❌ Xatolik yuz berdi. Qayta urinib ko‘ring.");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("❌ Server bilan aloqa yo‘q.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-5 p-8 backdrop-blur-md bg-white/70 border border-white/30 shadow-2xl rounded-3xl mt-14 animate-fade-in"
    >
      <h1 className="text-2xl font-bold text-gray-800">📝 Yangi post yaratish</h1>

      <input
        type="text"
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
        disabled={loading}
        className={`w-full py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 ${
          loading
            ? "bg-indigo-300 cursor-not-allowed"
            : "bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-700 hover:brightness-110 hover:scale-105 hover:shadow-2xl"
        }`}
      >
        {loading ? "⏳ Yuborilmoqda..." : "🚀 Yuborish"}
      </button>
    </form>
  );
}
