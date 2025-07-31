'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/categories');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-black">
      <div className="text-center p-8 rounded-2xl shadow-2xl max-w-xl bg-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-4">
          Zamonaviy Dasturlashga Birinchi Qadam
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Biz bilan oson, chiroyli va samarali o‘rganing. Kategoriyalarni tanlab boshlang.
        </p>
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Kategoriyalarni ko'rish
        </button>
      </div>
    </div>
  );
}
