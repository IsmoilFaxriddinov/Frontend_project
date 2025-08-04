export async function getSpecializedItems() {
  const res = await fetch("http://localhost:1337/api/specialized-items?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Specialized maʼlumotlarini olishda xatolik yuz berdi");
  
  }

  const data = await res.json();


  return data.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    Description: item.Description || [],
    image: item.image || {},
  }));
}
