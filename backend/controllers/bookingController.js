const Booking = require('../models/Booking');

exports.checkAvailability = async (req, res) => {
  try {
    const { date, time } = req.body;

    const existingBooking = await Booking.findOne({ date, time });

    if (existingBooking) {
      return res.json({ available: false, message: 'Slot is already booked!' });
    }

    res.json({ available: true, message: 'Slot is available!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a booking
exports.createBooking = async (req, res) => {
  try {
    const { name, contact, date, time, guests } = req.body;
    const existingBooking = await Booking.findOne({ date, time });

    if (existingBooking) {
      return res.status(400).json({ message: 'Slot already booked!' });
    }

    const newBooking = new Booking({ name, contact, date, time, guests });
    await newBooking.save();

    res.status(201).json({ message: 'Booking successful!', booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
