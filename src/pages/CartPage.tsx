import { useCart } from "../contexts/CartContexts";
import { getProductsByIds } from "../services/products";
import { CartButton } from "../components/CartButton";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
export function CartPage() {
  const { items, getItemQuantity } = useCart();

  const {
    data: products,
    isError,
    isLoading,
  } = useFetch(() => getProductsByIds(items.map((item) => item.id)));

  if (isLoading) return <Loading />;
  if (isError || products === null) return <Error />;

  function sumCart() {
    return products!.reduce((total, product) => {
      return (total += product.price * getItemQuantity(product.id));
    }, 0);
  }

  return (
    <div className="flex flex-col gap-2 hebrew">
      {products.map((product) => {
        const item = items.find((i) => i.id === product.id);
        if (item === undefined) return null;
        return (
          <div className="flex border shadow-md hebrew">
            <img
              className="h-72 w-72 object-contain"
              src={product.image}
              alt={product.name}
            />
            <div className="flex h-72 items-center">
              <div className="flex flex-col gap-8">
                <p className="">{product.name}</p>
                <p> מחיר: {product.price}</p>
                <CartButton id={product.id} />
              </div>
            </div>
          </div>
        );
      })}
      <div className="text-xl font-bold">סכום כולל של העגלה: {sumCart()}</div>
    </div>
  );
}
