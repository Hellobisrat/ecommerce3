import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Ecommerce3
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/cart">
            <ShoppingCart />
          </Link>

          {user ? (
            <>
              <Link to="/profile">
                <User />
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <User />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}