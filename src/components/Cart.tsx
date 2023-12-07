import { useCart } from "../contexts/CartContexts";
import { useModal } from "../contexts/ModalContexts";

export function Cart({ id }: { id: string }) {
  const { clearItem } = useCart();
  const { closeModal } = useModal();
  return (
    <div className="flex  justify-center items-center ">
      <div className="bg-white rounded-md">
        <div className="text-center text-xl font-bold p-5">
          האם אתה בטוח שאתה רוצה למחוק את מוצר זה מהעגלה
        </div>
        <div className="flex gap-5 justify-center p-5">
          <button onClick={() => clearItem(id)} className="bg-green-500 button">
            כן
          </button>
          <button onClick={() => closeModal()} className="bg-red-500 button">
            לא
          </button>
        </div>
      </div>
    </div>
  );
}
