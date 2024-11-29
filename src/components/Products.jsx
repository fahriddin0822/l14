import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/getProducts";
import ProductCard from "./ProductCard";
import Container from "../style/Container";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function get() {
      const products = await getProducts();
      setProducts(products);
    }
    get();
  }, []);

  return (
    <Container>
      <h1 className="text-2xl font-semibold mt-16 text-white">Products</h1>
      <div className="grid grid-cols-3 content-stretch gap-3 mt-8 place-content-between max-md:grid-cols-2 max-sm:grid-cols-1">
        {products &&
          products.map((product) => (
            <div className="flex justify-center items-center">
              <ProductCard grid product={product} />
            </div>
          ))}
        {!products && <h2 className="text-2xl font-semibold">Loading...</h2>}
      </div>
    </Container>
  );
}
