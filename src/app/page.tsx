import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/app/api/api-product";
import { Product } from "@/types/product";

const Home = async () => {
  // The data fetching occurs on the server side, Fetch a list of products from the API and store them in the products array.
  const products: Product[] = await fetchProducts();

  return (
    <main className="max-w-3xl mx-auto p-[19.5px]">
      <h1 className="font-bold text-2xl leading-7">Fake Products</h1>
      <ProductList products={products} />
    </main>
  );
};

export default Home;
