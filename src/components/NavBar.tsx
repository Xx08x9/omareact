import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-5 py-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">
          MovieApp
        </Link>
        
        <div className="flex gap-5">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Поиск
          </Link>
          <Link to="/favorites" className="text-gray-600 hover:text-blue-600">
            Избранное
          </Link>
        </div>
      </div>
    </nav>
  );
}