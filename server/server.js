const express = require("express");
const cors = require("cors");
const mongoose = require("./Config/Connect");
const multer = require('multer'); // Import Multer
const app = express();
const bodyParser = require("body-parser").urlencoded({ extended: true });

// Configure Multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    // Use the original file name for the uploaded file
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use("/public", express.static("public"));
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 3900;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const UserRoutes = require("./Routes/User");
const ServiceRoutes = require("./Routes/Service");
const SousServiceRoutes = require("./Routes/SousService");
const ReservationRoutes = require("./Routes/Reservation");
const ContactRoutes = require("./Routes/Contact");
const AdminRoutes = require("./Routes/Admin");

// Use Multer middleware for file uploads
app.use("/api", bodyParser, upload.single('image'), UserRoutes);
app.use("/api", bodyParser, ServiceRoutes);
app.use("/api", bodyParser, SousServiceRoutes);
app.use("/api", bodyParser, ReservationRoutes);
app.use("/api", bodyParser, ContactRoutes);
app.use("/api", bodyParser, AdminRoutes);
