import { Link } from "react-router-dom";
import { Product } from "../models/Product";
import { CartButton } from "./CartButton";

type SingleProductProps = {
  product: Product;
};

export function SingleProduct({ product }: SingleProductProps) {
  return (
    <div>
      <Link to={`/product/${product.slug}`}>
        <div>
          <img
            className="h-80 w-80 object-contain "
            src={product.image}
            alt={product.name}
          />
          <div className="grid grid-cols-2 p-2 bg-blue-800">
            <p className="col-span-2 font-bold">{product.name}</p>
            <p> מחיר {product.price}</p>
            <p> מחיר אילת {product.eilatPrice}</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-center p-2">
        <CartButton id={product.id} />
      </div>
    </div>
  );
}
