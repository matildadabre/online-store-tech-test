import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-5">
      <h1 className="font-bold text-2xl leading-7">Fake Products</h1>
      <ProductList />
    </main>
  );
}
