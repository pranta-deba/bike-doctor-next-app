import React from "react";

const CheckoutPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.BASE_URL}/api/service/${id}`);
  const service = await res.json();

  console.log(service);
  return <div></div>;
};

export default CheckoutPage;
