'use client';

import { useEffect, useState } from 'react';
import { getSpecializedItems } from '@/lib/getSpecializedItems';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SpecializedPage() {
  const [items, setItems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const data = await getSpecializedItems();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Maxsus Dasturlash
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            {item.image?.url && (
              <Image
                src={`http://localhost:1337${item.image.url}`}
                alt={item.image.alternativeText || 'image'}
                width={400}
                height={300}
                className="rounded-lg mb-4 object-cover"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Tugatish tugmasi */}
      {items.length === 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => router.push('/finish')}
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl text-white"
          >
            Tugatish
          </button>
        </div>
      )}
    </div>
  );
}
