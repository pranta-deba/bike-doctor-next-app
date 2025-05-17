import { TBooking } from "@/types";
import Image from "next/image";

const MyBookings = ({ bookings }: { bookings: TBooking[] }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">Image</th>
              <th className="px-4 py-2 text-left border">Service Name</th>
              <th className="px-4 py-2 text-left border">Date</th>
              <th className="px-4 py-2 text-left border">Price</th>
              <th className="px-4 py-2 text-left border">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="border-t">
                <td className="px-4 py-2 border">
                  <Image
                    src={booking.service_img}
                    alt={booking.service_name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                </td>
                <td className="px-4 py-2 border">{booking.service_name}</td>
                <td className="px-4 py-2 border">{booking.date}</td>
                <td className="px-4 py-2 border">{booking.service_price} $</td>
                <td className="px-4 py-2 border space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
