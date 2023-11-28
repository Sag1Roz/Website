import { useCart } from "../contexts/CartContexts";

export function CartButton({ id }: { id: string }) {
  const { decrementQuantity, getItemQuantity, incrementQuantity } = useCart();
  if (getItemQuantity(id) < 1) {
    return (
      <button onClick={() => incrementQuantity(id)} className="button px-14">
        הוספה לעגלה
      </button>
    );
  }
  return (
    <div className="flex gap-10 border rounded-lg bg-blue-800">
      <button
        className="px-5 py-2 button rounded-lg shadow-none rounded-l-none border-none"
        onClick={() => decrementQuantity(id)}
      >
        -
      </button>
      <div className="flex justify-center items-center text-white">
        {getItemQuantity(id)}
      </div>
      <button
        className="px-5 py-2 button rounded-lg shadow-none rounded-r-none border-none"
        onClick={() => incrementQuantity(id)}
      >
        +
      </button>
    </div>
  );
}
