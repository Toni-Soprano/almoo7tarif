const express = require("express");
const multer = require("multer");

const router = express.Router();
const {
  CreateSousService,
  GetAllSousServices,
  GetSingleSousServiceById,
  GetAllSingleSousServiceByService,
  UpdateSousService,
  DeleteSousService,
} = require("../Controller/SousService");

router.post("/CreateSousService", CreateSousService);
router.post("/GetAllSousServices", GetAllSousServices);
router.post("/GetSingleSousServiceById", GetSingleSousServiceById);
router.post(
  "/GetAllSingleSousServiceByService",
  GetAllSingleSousServiceByService
);
router.put("/UpdateSousService", UpdateSousService);
router.delete("/DeleteSousService/:id", DeleteSousService);

module.exports = router;
