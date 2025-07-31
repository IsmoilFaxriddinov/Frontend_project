// app/categories/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function CategoriesPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/categories/core');
  };

  const handleClick2 = () => {
    router.push('/categories/specialized');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-10 space-y-6">
      <h1 className="text-4xl font-bold text-center">Zamonaviy Dasturlashga Birinchi Qadam</h1>
      <p className="text-lg text-center max-w-xl">
        Biz bilan oson, chiroyli va samarali o‘rganing. Kategoriyalarni tanlab boshlang.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleClick}
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-2xl text-white font-semibold shadow-lg"
        >
          Core Dasturlash
        </button>
        <button
          onClick={handleClick2}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-2xl text-white font-semibold shadow-lg"
        >
          Maxsus Dasturlash
        </button>
      </div>
    </div>
  );
}
