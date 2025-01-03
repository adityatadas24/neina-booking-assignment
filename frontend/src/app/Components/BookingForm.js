"use client";
import React, { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://neina-booking-assignment-5.onrender.com/api/bookings", formData);
      alert("Booking successful!");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full flex-col gap-4">
      <h1 className="text-xl font-semibold">Booking Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center w-full flex-col gap-4"
      >
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-10/12"
        />
        <input
          name="contact"
          placeholder="Contact"
          onChange={handleChange}
          required
          className="w-10/12"
        />
        <input
          name="date"
          type="date"
          onChange={handleChange}
          required
          className="w-10/12"
        />
        <input
          name="time"
          type="time"
          onChange={handleChange}
          required
          className="w-10/12"
        />
        <input
          name="guests"
          type="number"
          onChange={handleChange}
          required
          className="w-10/12"
        />
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
}
