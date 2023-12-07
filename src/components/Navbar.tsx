import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useCart } from "../contexts/CartContexts";
import { useModal } from "../contexts/ModalContexts";
import { Login } from "./Login";

export function Navbar() {
  const { user } = useUser();
  const { items } = useCart();
  const { openModal } = useModal();

  return (
    <nav className="flex m-auto justify-between p-5 max-w-5xl text-blue-500">
      <div className="flex gap-8">
        <Link className="" to={"/cart"}>
          {items.length > 0 && <span>{items.length}-</span>}עגלה
        </Link>
        {user ? <p>{user.firstName}</p> : "אורח"}

        <button
          onClick={() => openModal(<Login />)}
          className="underline transition-all hover:text-cyan-300"
        >
          {user ? "התנתקות" : "התחברות"}
        </button>
      </div>

      <Link to={"/"} className="text-2xl ">
        Rozi
      </Link>
      <div className="flex gap-8 hebrew">
        <Link
          className="transition-all hover:underline hover:text-cyan-300"
          to={"/"}
        >
          בית
        </Link>
        <Link
          className="transition-all hover:underline hover:text-cyan-300"
          to={"/product"}
        >
          המוצרים שלנו
        </Link>
        <Link
          className="transition-all hover:underline hover:text-cyan-300"
          to={"/contact"}
        >
          צרו קשר
        </Link>
      </div>
    </nav>
  );
}
