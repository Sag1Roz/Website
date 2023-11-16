import { useParams } from "react-router-dom";
import { getProductBySlug } from "../services/products";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export function ProductSlagPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getProductBySlug(slug!)
      .then((data) => {
        if (data !== null) setProduct(data);
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
    <div className={`hebrew`}>
      <div>
        <p className="text-3xl font-bold text-center underline p-5 text-blue-700 ">
          {product?.name}
        </p>
      </div>
      <div className="grid grid-cols-2 ">
        <img
          className={`w-60 h-72 object-contain `}
          src={product?.image}
          alt={product?.name}
        />
        <div className="flex h-full items-center ">
          <div className="flex flex-col gap-5">
            <p className="text-lg">{product?.description}</p>
            <div className="flex justify-start gap-5 font-bold">
              <p>מחיר: {product?.price} שקל</p>
              <p> מחיר אילת: {product?.eilatPrice} שקל </p>
            </div>
            <div className="flex justify-start gap-5">
              <button className="button">הוספה לעגלה</button>
              <button className="button"> קנה עכשיו</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
