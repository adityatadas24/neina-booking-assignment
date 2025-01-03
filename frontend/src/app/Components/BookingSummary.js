"use client";

import { useEffect, useState } from "react";
import axios from "axios";

function BookingSummary() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("https://neina-booking-assignment-hs79.vercel.app//api/bookings")
      .then((response) => setBookings(response.data))
      .catch((error) => console.error(error));
  }, []);


 if (!bookings || bookings.length === 0) {
    return <p>No booking details available.</p>;
  }

  return (
    <div className="flex justify-center items-center w-full flex-col gap-4 mt-8">
      <h2 className="text-2xl font-semibold ">Booking Summary</h2>
      {Array.isArray(bookings) ? (<div className="flex justify-center items-center w-10/12
       flex-wrap gap-6 ">
        
        {bookings.map((booking, index) => (
        <div key={index} className="p-2 border-2 border-black">
          <p>
            <strong>Name:</strong> {booking.name}
          </p>
          <p>
            <strong>Contact:</strong> {booking.contact}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Time:</strong> {booking.time}
          </p>
          <p>
            <strong>Guests:</strong> {booking.guests}
          </p>
          <p style={{ color: "green" }}>Your reservation is confirmed!</p>
      
        </div>
      ))}
      </div>):(<p>No booking details available.</p>)}
    </div>
  );
}

export default BookingSummary;
