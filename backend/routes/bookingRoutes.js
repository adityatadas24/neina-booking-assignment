const express = require('express');
const { getBookings, createBooking, deleteBooking, checkAvailability } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', getBookings);
router.post('/', createBooking);
router.delete('/:id', deleteBooking);
router.post('/availability', checkAvailability);

module.exports = router;
