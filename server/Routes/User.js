const express = require("express");
const multer = require("multer");

const router = express.Router();
const {
  GetAllUsers,
  RegistreUser,
  Login,
  GetSingleUser,
  BlockUser,
  DeBlockUser,
  UpdateUser,
  changePassword,
} = require("../Controller/User");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/FindAllUsers", GetAllUsers);
router.post("/RegistreUser", upload.single("image"), RegistreUser);
router.post("/Login", Login);
router.post("/GetSingleUser", GetSingleUser);
router.post("/BlockUser", BlockUser);
router.post("/DeBlockUser", DeBlockUser);
router.post("/UpdateUser", UpdateUser);
router.post("/changePassword", changePassword);

module.exports = router;
