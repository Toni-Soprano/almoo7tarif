const express = require("express");
const router = express.Router();
const {
  CreateContact,
  GetAllContact,
  GetContactByID,
  GetAllContactByIdUser,
  ReplayMessageByAdmin,
} = require("../Controller/Contact");

router.post("/CreateContact", CreateContact);
router.post("/GetAllContact", GetAllContact);
router.post("/GetContactByID", GetContactByID);
router.post("/GetAllContactByIdUser", GetAllContactByIdUser);
router.post("/ReplayMessageByAdmin", ReplayMessageByAdmin);

module.exports = router;
