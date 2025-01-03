const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config();

const app = express();
app.use(cors(
  {
    origin: ["neina-booking-assignment-bplq.vercel.app"],
    methods:["POST", "GET"],
    credentials: true
  }
));
app.use(express.json());

connectDB();

app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
