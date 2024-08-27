import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Popup = ({ orderPopup, setOrderPopup, setAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? 'http://localhost:8000/api/token/' : 'http://localhost:8000/api/register/';
      const data = isLogin ? { email: formData.email, password: formData.password } : formData;
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert(isLogin ? 'Successfully logged in' : 'Registration successful. Please login.');
        if (!isLogin) {
          setIsLogin(true);
          setFormData({
            username: '',
            email: '',
            password: '',
            password2: '',
          });
        } else {
          const { access, refresh } = response.data;
          localStorage.setItem('access_token', access);
          localStorage.setItem('refresh_token', refresh);
          setOrderPopup(false);
          setAuthenticated(true);
          navigate('/profile');  // Redirect to the profile page
        }
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    orderPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg relative w-96">
          <FaTimes className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={() => setOrderPopup(false)} />
          <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            {!isLogin && (
              <input
                type="password"
                name="password2"
                placeholder="Confirm Password"
                value={formData.password2}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            )}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
