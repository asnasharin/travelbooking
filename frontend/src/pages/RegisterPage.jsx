import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { registerUser } from '../services/authService';
import { useNavigate } from "react-router-dom";

function RegisterPage() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
       e.preventDefault();

    try {
      const data = await registerUser(formData);

      console.log(data);

      alert("Registered Successfully");
      navigate("/")
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="w-96 p-6 bg-white rounded-lg shadow">

        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
           type="text"
           name="name"
           value={formData.name}
           onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          placeholder='Name'
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          placeholder="Password"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Register
        </button>

      </div>

    </div>
    </form>
  )
}

export default RegisterPage