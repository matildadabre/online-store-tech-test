import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/app/api/api-product";
import { Product } from "@/app/types/product";

const Home = async () => {
  // Fetch a list of products from the API and store them in the products array.
  const products: Product[] = await fetchProducts();

  return (
    <main className="max-w-3xl mx-auto py-5">
      <h1 className="font-bold text-2xl leading-7">Fake Products</h1>
      <ProductList products={products} />
    </main>
  );
};

export default Home;
