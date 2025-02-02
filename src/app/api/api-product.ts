/**
 * Fetches a list of products from the Fake Store API.
 * If the request fails, it logs an error message to the console and returns an empty array.
 */
export const fetchProducts = async () => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
