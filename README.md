# Car Rental System – Backend Repo

This is the **Node.js & Express-based backend** of the Car Rental System built using the MERN stack. It handles authentication, car inventory, booking logic, and provides secure REST APIs for the frontend. The application supports both user and admin operations with role-based access.

---

## 🔗 Live Demo

👉 [https://car-rental-web-mu.vercel.app/](https://car-rental-web-mu.vercel.app/)

---

## 📌 Features

- 🚘 CRUD operations for car inventory
- 📅 Booking system with real-time availability
- 🧾 Booking history tracking for users
- 👨‍💼 Admin routes to manage cars and bookings

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Tokens)**
- **CORS**
- **Render** (for backend deployment)

---

## 📦 Installation & Local Setup

> ⚠️ **Make sure MongoDB is running locally or replace it with your MongoDB Atlas URI inside `server.js`.**

1. Clone the repository:

```bash
git clone https://github.com/SakethKumarTallam/CRBackend
cd CRBackend
```


2. Install Dependencies 
```
npm install
```
3. Update MongoDB URL inside `server.js`:
```
// server.js
mongoose.connect("your-mongodb-connection-string");
```


4. Start the  Server

```
node server.js
```
If you are running locally the backend will run at `http://localhost:5001`




## 🌐 Frontend Application
This backend powers the frontend hosted on Vercel.

🔗 Frontend Repo - 
[Front End Repo URL](https://github.com/SakethKumarTallam/CarRentalWeb)


## 🌍 MongoDB Configuration
For Local Development:
```
// In server.js
mongoose.connect("mongodb://localhost:27017/<Your Db Name>");
```
For Deployment (MongoDB Atlas):
```
// In server.js
mongoose.connect(<Your MongoDB Atlas cluster Connection String>).
```

`Precaution:` Always update the MongoDB URI in server.js based on the environment (local or production).


## 📘 Project Summary
- Backend component of a full-stack MERN car rental system

- Handles all core logic: user management, vehicle listings, booking flow, and admin operations

- Designed for performance with optimized MongoDB queries and clean route structure

