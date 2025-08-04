'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FinishPage() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex flex-col items-center justify-center text-white px-6 py-12">
      <h1 className="text-5xl font-bold mb-6 text-center">
        🎉 Tabriklaymiz!
      </h1>
      <p className="text-xl text-center max-w-2xl mb-8">
        Siz barcha kerakli bo‘limlarni muvaffaqiyatli yakunladingiz.
        Endi siz zamonaviy dasturlash bo‘yicha muhim bilimlarga ega bo‘ldingiz.
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition"
      >
        Bosh sahifaga qaytish
      </button>
    </div>
  );
}
