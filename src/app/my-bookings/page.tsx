"use client";
import MyBookings from "@/components/table/MyBookings";
import React, { useEffect, useState } from "react";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/service`);
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
  }, []);

  //   console.log(bookings);

  return (
    <div>
      <MyBookings bookings={bookings} />
    </div>
  );
};

export default MyBookingsPage;
