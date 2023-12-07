import { ReactNode, createContext, useContext, useState } from "react";
import { CartItem } from "../models/CartItem";
import { useModal } from "./ModalContexts";
import { Cart } from "../components/Cart";

type UserContextType = {
  items: CartItem[];
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  getItemQuantity: (id: string) => number;
  clearItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext({} as UserContextType);

export function useCart() {
  return useContext(CartContext);
}
export function CartContextsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { openModal, closeModal, modalChildren } = useModal();

  function incrementQuantity(id: string) {
    const index = items.findIndex((i) => i.id === id);

    setItems((preItem) => {
      if (index === -1) return [...preItem, { id, quantity: 1 }];
      return preItem.map((item) => {
        if (preItem[index].id === item.id)
          return { ...item, quantity: item.quantity + 1 };
        return { ...item };
      });
    });
  }
  function decrementQuantity(id: string) {
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) return;
    if (items[index].quantity === 1) {
      openModal(<Cart id={id} />);
      return;
    }
    setItems((preItem) => {
      return preItem.map((item) => {
        if (preItem[index].id === item.id)
          return { ...item, quantity: item.quantity - 1 };
        return { ...item };
      });
    });
  }

  function getItemQuantity(id: string) {
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) return 0;
    return items[index].quantity;
  }

  function clearItem(id: string) {
    const filterItems = items.filter((i) => i.id !== id);
    setItems(filterItems);
    modalChildren && closeModal();
  }

  function clearCart() {
    setItems([]);
  }
  return (
    <CartContext.Provider
      value={{
        clearCart,
        clearItem,
        getItemQuantity,
        decrementQuantity,
        incrementQuantity,
        items,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
