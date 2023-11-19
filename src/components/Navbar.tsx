import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export function Navbar() {
  const { user } = useUser();

  return (
    <nav className="flex m-auto justify-between p-5 max-w-5xl text-blue-500">
      <div className="flex gap-3">
        {user ? <p>{user.firstName}</p> : "אורח"}

        <Link
          className="underline transition-all hover:text-cyan-300"
          to="/Login"
        >
          {user ? "התנתקות" : "התחברות"}
        </Link>
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
