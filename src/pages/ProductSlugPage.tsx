import { useParams } from "react-router-dom";
import { getProductBySlug } from "../services/products";

import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { CartButton } from "../components/CartButton";
import { useFetch } from "../hooks/useFetch";

export function ProductSlagPage() {
  const { slug } = useParams();

  const {
    data: product,
    isError,
    isLoading,
  } = useFetch(() => getProductBySlug(slug!));

  if (isLoading) return <Loading />;
  if (isError || product === null) return <Error />;

  return (
    <div className={`hebrew`}>
      <div>
        <p className="text-3xl font-bold text-center underline p-5 text-blue-700 ">
          {product.name}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <img
          className={`w-60 h-72 object-contain `}
          src={product.image}
          alt={product.name}
        />
        <div className="flex h-full items-center ">
          <div className="flex flex-col gap-5">
            <p className="text-lg">{product.description}</p>
            <div className="flex justify-start gap-5 font-bold">
              <p>מחיר: {product.price} שקל</p>
              <p> מחיר אילת: {product.eilatPrice} שקל </p>
            </div>
            <div className="flex justify-start gap-5">
              <CartButton id={product.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
