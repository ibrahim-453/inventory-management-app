import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleUser = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert('Please fill all the fields');
    } else {
      const success = signup(username, email, password);
      if (success) {
        setUsername('');
        setEmail('');
        setPassword('');
        alert('SignUp Successful');
        navigate('/login');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4">
      <div className="bg-zinc-800 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-pink-400 text-center mb-6">Create Account</h2>
        <form onSubmit={handleUser} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sign Up
          </button>
          <p className="text-center text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="text-pink-400 hover:underline">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
