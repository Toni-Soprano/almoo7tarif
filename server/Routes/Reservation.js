const express = require("express");
const router = express.Router();
const {
  CreateReservation,
  GetAllReservation,
  GetReservationById,
  GetReservationByIdUser,
  ChangeEtatReservationByAdmin,
  AnnulerReservationByUser,
} = require("../Controller/Reservation");

router.post("/CreateReservation", CreateReservation);
router.post("/GetAllReservation", GetAllReservation);
router.post("/GetReservationById", GetReservationById);
router.post("/GetReservationByIdUser", GetReservationByIdUser);
router.post("/ChangeEtatReservationByAdmin", ChangeEtatReservationByAdmin);
router.post("/AnnulerReservationByUser", AnnulerReservationByUser);
module.exports = router;
