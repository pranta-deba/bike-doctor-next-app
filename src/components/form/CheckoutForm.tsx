"use client";

import { TService } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutForm = ({ service }: { service: TService }) => {
  const session = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: session?.data?.user?.name || "",
    date: "",
    email: session?.data?.user?.email || "",
    dueAmount: service?.price || 0,
    phone: "",
    address: "",
  });

  if (session?.status === "loading") return null;
//   console.log(service);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderInfo = {
      ...formData,
      service_id: service?._id,
      service_name: service?.name,
      service_price: service?.price,
      service_img: service?.image,
    };
    console.log("Order Confirmed:", orderInfo);

    const res = await fetch(`http://localhost:3000/api/service`, {
      method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      body: JSON.stringify(orderInfo),
    });

    const data = await res.json();
    if (data?.insertedId) {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Checkout Form</h2>
      <h2 className="text-2xl font-semibold text-center mb-4">
        {service?.name}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        readOnly={true}
        value={session?.data?.user?.name || ""}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        readOnly={true}
        value={session?.data?.user?.email || ""}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      />
      <input
        type="number"
        name="dueAmount"
        placeholder="Due Amount"
        value={service?.price}
        readOnly={true}
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
