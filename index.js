const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./db');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api/cars', require('./routes/carsRoute'));
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/bookings', require('./routes/bookingsRoute'));


app.listen(5001, () => {
    console.log(`Server started on port 5001`);
});

