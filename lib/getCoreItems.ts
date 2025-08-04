export async function getCoreItems() {
  const res = await fetch("http://localhost:1337/api/core-items?populate=image");
  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    Description: item.Description,
    image: item.image,
  }));
}
