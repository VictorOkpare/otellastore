import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importing the close icon from react-icons
import axios from 'axios'; // Importing axios for making HTTP requests

const Popup = ({ orderPopup, setOrderPopup, setAuthenticated }) => {
  // State to determine if the form is for login or register
  const [isLogin, setIsLogin] = useState(true);

  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    confirm_password: '',
  });

  // Handle changes to form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update the specific field that changed
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Determine the URL based on whether the user is logging in or registering
      const url = isLogin ? 'http://localhost:8000/api/users/login/' : 'http://localhost:8000/api/users/register/';
      const response = await axios.post(url, formData); // Make the API call
      if (response.status === 201 || response.status === 200) {
        // Check if the response is successful
        alert(isLogin ? 'Successfully logged in' : 'Registration successful. Please login.');
        if (!isLogin) {
          setIsLogin(true); // Switch to login form after successful registration
          setFormData({
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            phone: '',
            password: '',
            confirm_password: '',
          }); // Clear form data
        } else {
          setOrderPopup(false); // Close the popup after successful login
          setAuthenticated(true); // Update authentication status
          localStorage.setItem('authenticated', true); // Store authentication status in local storage
          window.location.reload(); // Reload the page to update the navbar
        }
      }
    } catch (error) {
      console.error(error); // Log any errors
      alert('An error occurred'); // Notify the user of the error
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
              <>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </>
            )}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
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
                name="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
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
