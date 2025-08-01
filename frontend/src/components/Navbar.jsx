


import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="text-blue-600 font-bold">CMS Panel</Link>

        {!isLoggedIn && (
          <>
            <Link to="/" className="text-blue-600">Home</Link>
            <Link to="/about" className="text-blue-600">About</Link>
            <Link to="/contact" className="text-blue-600">Contact</Link>
            <Link to="/services" className="text-blue-600">WADEMO Services</Link>
          </>
        )}
      </div>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      ) : (
        <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;