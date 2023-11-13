import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="flex justify-center h-full items-center">
      <div className="border border-blue-600 rounded-md ">
        <div className="p-5">
          <h1 className="text-center p-8 font-bold text-3xl text-blue-400">
            E R R O E R !
          </h1>
          <p className="p-8 text-lg">Oh no, Something went wrong</p>
        </div>
        <div className="bg-blue-600">
          <Link
            className="justify-center flex p-5 text-lg text-white transition-all hover:bg-blue-300"
            to={"/"}
          >
            חזרה הביתה
          </Link>
        </div>
      </div>
    </div>
  );
}
