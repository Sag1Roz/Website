import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
type ModalContextsType = {
  modalChildren?: ReactNode;
  openModal: (newChildren: ReactNode) => void;
  closeModal: () => void;
};

type CustomModalProps = {
  children: ReactNode;
  closeModal: () => void;
};

const ModalContexts = createContext({} as ModalContextsType);

export function useModal() {
  return useContext(ModalContexts);
}

export function ModalContextsProvider({ children }: { children: ReactNode }) {
  const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);

  function openModal(newChildren: ReactNode) {
    setModalChildren(newChildren);
  }

  function closeModal() {
    setModalChildren(null);
  }

  return (
    <ModalContexts.Provider value={{ openModal, closeModal, modalChildren }}>
      {children}
    </ModalContexts.Provider>
  );
}
export function CustomModal({ closeModal, children }: CustomModalProps) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Enter") closeModal();
    }
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [closeModal]);
  return createPortal(
    <div className="fixed bg-[rgba(0,0,0,0.5)] top-0 bottom-0 left-0 right-0 z-30 flex justify-center items-center ">
      <div className="bg-dark p-5 rounded-lg  relative">
        <button onClick={closeModal} className="absolute top-5 left-7">
          &#x2715;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-container")!
  );
}
