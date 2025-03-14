import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A2DED0] outline-none"
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A2DED0] outline-none"
          />
          <button className="w-full bg-[#A2DED0] text-white p-3 rounded-lg hover:bg-[#89CDBF] transition duration-300 cursor-pointer">
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link
            to="signup"
            className="text-[#A2DED0] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <p className="text-center text-gray-600 mt-2">
          <Link
            to="/reset-password"
            className="text-[#A2DED0] font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
