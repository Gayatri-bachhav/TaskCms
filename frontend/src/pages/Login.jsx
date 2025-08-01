import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">
          Welcome back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill your email address and password to sign in.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border p-3 pl-10 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <FaUser
              className="absolute left-3 top-9 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border p-3 pl-10 pr-10 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
            
          </div>
         
          <button
            type="submit"
            className="bg-green-900 text-yellow-200 font-semibold w-full py-2 rounded-md hover:opacity-90 transition"
          >
            Sign in
          </button>
        </form>

  
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
