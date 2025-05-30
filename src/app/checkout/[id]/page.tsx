import CheckoutForm from "@/components/form/CheckoutForm";
import React from "react";

const CheckoutPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.BASE_URL}/api/service/${id}`);
  const service = await res.json();

  return (
    <div>
      <CheckoutForm service={service} />
    </div>
  );
};

export default CheckoutPage;
