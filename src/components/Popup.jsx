import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/register/', {
        first_name: firstName,
        surname,
        address,
        email,
        phone,
        password,
        confirm_password: confirmPassword
      });
      setMessage('Registration successful!');
      setError(null);
    } catch (err) {
      setError('Registration failed: ' + err.response.data.detail);
      setMessage('');
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/login/', {
        email,
        password,
      });
      setMessage('Login successful!');
      setError(null);
    } catch (err) {
      setError('Login failed: ' + err.response.data.detail);
      setMessage('');
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${orderPopup ? 'block' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-96">
        <button onClick={() => setOrderPopup(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
        
        {isLogin ? (
          <form onSubmit={loginUser}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200">Login</button>
            <div className="mt-2 flex justify-between">
              <button type="button" className="text-blue-500 hover:underline">Forgot password?</button>
              <button type="button" onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">Don't have an account? Register</button>
            </div>
          </form>
        ) : (
          <form onSubmit={registerUser}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full mb-2 p-2 border border-gray-300 rounded" />
            <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200">Register</button>
            <div className="mt-2">
              <button type="button" onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">Already have an account? Login</button>
            </div>
          </form>
        )}

        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Popup;
