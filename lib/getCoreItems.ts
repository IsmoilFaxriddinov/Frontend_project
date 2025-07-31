export async function getCoreItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/core-items?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Core maʼlumotlarini olishda xatolik yuz berdi");
  }

  const data = await res.json();
  return data.data;
}
