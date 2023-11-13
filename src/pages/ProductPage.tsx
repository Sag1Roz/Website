import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { getAllProducts } from "../services/Product";
import { SingleProduct } from "../components/SingleProduct";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        if (data !== null) setProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <div>
      <h1 className="text-3xl text-blue-800 underline text-center hebrew p-5">
        המוצרים שלנו
      </h1>
      <div className="grid grid-cols-3 gap-3 hebrew">
        {products.map((product) => {
          return (
            <div
              className="border border-blue-800 text-blue-300 rounded-md shadow-md"
              key={product.id}
            >
              <SingleProduct key={product.id} product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
