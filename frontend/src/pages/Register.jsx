import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope } from 'react-icons/fa';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.post('/auth/register', form);
      alert("Registration successful. Please login.");
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">Create Account</h2>
        <p className="text-center text-gray-600 mb-6">Enter your details to get started.</p>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-3 pl-10 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border p-3 pl-10 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              className="border p-3 pl-10 pr-10 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

      
          <button
            type="submit"
            className="bg-green-900 text-yellow-200 font-semibold w-full py-2 rounded-md hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
