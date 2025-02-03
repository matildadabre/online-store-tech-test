import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <ul>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ul>
  );
};

export default ProductList;
