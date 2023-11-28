import { getAllProducts } from "../services/products";
import { SingleProduct } from "../components/SingleProduct";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { useFetch } from "../hooks/useFetch";

export function ProductPage() {
  const {
    data: products,
    isError,
    isLoading,
  } = useFetch(() => getAllProducts());

  if (isLoading) return <Loading />;
  if (isError || products === null) return <Error />;

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
