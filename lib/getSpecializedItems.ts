export async function getSpecializedItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/specialized-items?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Specialized maʼlumotlarini olishda xatolik yuz berdi");
  }

  const data = await res.json();
  return data.data;
}
