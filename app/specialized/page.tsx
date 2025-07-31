// app/specialized/page.tsx
import Image from "next/image";

export default function SpecializedPage() {
  const data = [
    {
      title: "Mobile Development",
      description: "Custom mobile apps for iOS and Android with a native experience.",
      image: "/images/specialized1.jpg",
    },
    {
      title: "AI/ML Solutions",
      description: "Build intelligent solutions using the latest in machine learning.",
      image: "/images/specialized2.jpg",
    },
    {
      title: "Cloud Integration",
      description: "Scalable cloud platforms integrated into your workflow.",
      image: "/images/specialized3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Specialized Development</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
