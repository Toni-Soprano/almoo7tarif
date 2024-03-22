const express = require("express");
const multer = require("multer");

const router = express.Router();
const { RegistreAdmin, LoginAdmin } = require("../Controller/Admin");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/RegistreAdmin", upload.single("image"), RegistreAdmin);
router.post("/LoginAdmin", LoginAdmin);

module.exports = router;
