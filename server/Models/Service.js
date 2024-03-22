var mongoose = require("mongoose");
var ServicesSchema = new mongoose.Schema(
  {
    nom_FR: String,
    nom_AR: String,
    Description: String,
    coverURI: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("service", ServicesSchema);
