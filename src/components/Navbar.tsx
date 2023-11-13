import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex m-auto justify-between p-5 max-w-5xl text-blue-500">
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
