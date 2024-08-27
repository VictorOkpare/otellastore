import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    other_names: '',
    address: '',
    phone: '',
    alt_phone: '',
    profile_pic: '',
    order_history: [],
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setProfileData(response.data.profile);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfileData({
      ...profileData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(profileData).forEach(key => {
      formData.append(key, profileData[key]);
    });

    try {
      const response = await axios.put('http://localhost:8000/api/profile/', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        setProfileData(response.data.profile);
        setEditMode(false);
        alert('Profile updated successfully');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the profile');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome, {profileData.first_name} {profileData.last_name}</h1>
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={profileData.first_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={profileData.last_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="other_names"
            placeholder="Other Names"
            value={profileData.other_names}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={profileData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={profileData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="alt_phone"
            placeholder="Alternate Phone Number"
            value={profileData.alt_phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            name="profile_pic"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-200 mt-2"
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <p><strong>First Name:</strong> {profileData.first_name}</p>
          <p><strong>Last Name:</strong> {profileData.last_name}</p>
          <p><strong>Other Names:</strong> {profileData.other_names}</p>
          <p><strong>Address:</strong> {profileData.address}</p>
          <p><strong>Phone Number:</strong> {profileData.phone}</p>
          <p><strong>Alternate Phone Number:</strong> {profileData.alt_phone}</p>
          {profileData.profile_pic && (
            <img src={profileData.profile_pic} alt="Profile" className="w-32 h-32 rounded-full" />
          )}
          <button
            type="button"
            onClick={() => setEditMode(true)}
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Edit Profile
          </button>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            {profileData.order_history.length > 0 ? (
              <ul className="space-y-2">
                {profileData.order_history.map((order, index) => (
                  <li key={index} className="border p-4 rounded">
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Date:</strong> {order.date}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
