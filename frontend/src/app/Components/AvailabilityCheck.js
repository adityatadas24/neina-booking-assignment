"use client";
import React, { useState } from 'react';
import axios from 'axios';

export default function AvailabilityCheck() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availability, setAvailability] = useState(null);
  const [message, setMessage] = useState('');

  const checkAvailability = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/bookings/availability', {
        date,
        time,
      });
      setAvailability(response.data.available);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Failed to check availability:', error);
      setMessage('Error checking availability.');
    }
  };

  return (
    <div className='form flex justify-center items-center w-full gap-4 flex-col'>
      <h1 className='text-xl font-semibold'>Check Availability</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className='w-10/12'
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
         className='w-10/12'
      />
      <button onClick={checkAvailability}>Check Availability</button>
      {availability !== null && (
        <p style={{ color: availability ? 'green' : 'red' }}>{message}</p>
      )}
    </div>
  );
}
