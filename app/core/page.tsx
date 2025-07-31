import Image from "next/image";
import { getCoreItems } from "@/lib/getCoreItems";

export default async function CorePage() {
  const coreItems = await getCoreItems();

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Core Development</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {coreItems.map((item: any) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            {item.attributes.image?.data && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.image.data.attributes.url}`}
                alt={item.attributes.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {item.attributes.title}
              </h2>
              <p className="text-gray-300">{item.attributes.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
