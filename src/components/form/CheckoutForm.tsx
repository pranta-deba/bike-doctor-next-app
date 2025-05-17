"use client";

import { useState } from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    email: "",
    dueAmount: "",
    phone: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Confirmed:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Checkout Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      />

      <input
        type="number"
        name="dueAmount"
        placeholder="Due Amount"
        value={formData.dueAmount}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      />

      <textarea
        name="address"
        placeholder="Present Address"
        value={formData.address}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        Confirm Order
      </button>
    </form>
  );
};

export default CheckoutForm;
