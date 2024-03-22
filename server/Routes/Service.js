const express = require("express");
const multer = require("multer");

const router = express.Router();
const {
  RegistreService,
  GetAllServices,
  GetSingleServiceById,
  UpdateService,
  DeleteService,
} = require("../Controller/Service");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/CreateService", upload.single("coverURI"), RegistreService);
router.post("/GetAllServices", GetAllServices);
router.post("/GetSingleServiceById", GetSingleServiceById);
router.put("/UpdateService", UpdateService);
router.delete("/DeleteService/:id", DeleteService);

module.exports = router;
