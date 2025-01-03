"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";

export default function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Fetch bookings from backend
  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await axios.get("https://neina-booking-assignment-5.onrender.com/api/bookings");
        setBookings(res.data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    }
    fetchBookings();
  }, []);

  // Check if a slot is booked
  const isSlotBooked = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return bookings.some((booking) => booking.date === dateString);
  };

  const handleDateChange = (value) => {
    setDate(value);
    const dateString = value.toISOString().split("T")[0];
    const slot = bookings.find((b) => b.date === dateString);
    setSelectedSlot(slot || null);
  };

  return (
    <div className="calendarContainer flex justify-center items-center w-full gap-4 flex-col">
      <h2 className="text-xl font-semibold">Reservation Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date }) =>
          isSlotBooked(date) ? "bookedSlot" : "availableSlot"
        }
      />
      {selectedSlot ? (
        <div className="slotDetails">
          <p>
            <strong>Booked Slot:</strong>
          </p>
          <p>
            <strong>Name:</strong> {selectedSlot.name}
          </p>
          <p>
            <strong>Time:</strong> {selectedSlot.time}
          </p>
          <p>
            <strong>Guests:</strong> {selectedSlot.guests}
          </p>
        </div>
      ) : (
        <p>No slot selected or slot is available.</p>
      )}
    </div>
  );
}
