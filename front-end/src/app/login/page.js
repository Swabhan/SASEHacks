"use client"; 
import { useState } from 'react';

export default function Login() {
  // State to hold email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Hardcoded credentials
    const validEmail = 'testing@gmail.com';
    const validPassword = 'testing';

    // Check if the entered credentials match the hardcoded ones
    if (email === validEmail && password === validPassword) {
      // Successful login (you can redirect or display a success message here)
      alert('Login successful!');
      // Redirect to another page or perform further actions as needed
    } else {
      // Display an error message
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/city.jpg')" }}>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-5xl font-bold text-center mb-6 text-purple-500">Sign In</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>} {/* Display error message */}

        <form onSubmit={handleSubmit}> {/* Handle form submission */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-purple-300 text-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-purple-300 text-purple-500"
              placeholder="********"
              required
            />
          </div>

          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-purple-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
