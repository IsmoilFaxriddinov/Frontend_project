// app/final/page.tsx
import Link from "next/link";

export default function FinalPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-6"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg text-center">
        Sayohatimiz yakuniga yetdi!
      </h1>
      <p className="text-lg mb-10 text-center drop-shadow-md max-w-xl">
        Siz asosiy va maxsus yo‘nalishlar bilan tanishdingiz. Umid qilamizki, bu sizga foydali va qiziqarli bo‘ldi.
      </p>
      <Link
        href="/"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
