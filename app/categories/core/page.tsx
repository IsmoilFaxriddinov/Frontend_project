// app/categories/core/page.tsx
import Image from "next/image";
import { getCoreItems } from "@/lib/getCoreItems";

export default async function CorePage() {
  const data = await getCoreItems();

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Core Development</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item: any) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300"
          >
            <Image
              src={`http://localhost:1337${item.image.url}`}
              alt={item.title}
              width={500}
              height={300}
              className="w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-300">
                {item.Description?.[0]?.children?.[0]?.text || "No description"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* NEXT BUTTON */}
      <div className="mt-12 text-center">
        <a
          href="/final"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300"
        >
          Next
        </a>
      </div>
    </div>
  );
}
