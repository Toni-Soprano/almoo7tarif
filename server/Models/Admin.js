var mongoose = require("mongoose");
var AdminSchema = new mongoose.Schema(
  {
    nom: String,
    prenom: String,
    date_naissance: String,
    genre: String,
    image: {
      type: String,
      default: "ea812f86f71070e6ec6d21a3a0be8328.png",
    },
    email: String,
    mdp: String,
    tel: String,
    is_blocked: {
      type: String,
      default: "0",
    },
    is_verified: {
      type: String,
      default: "0",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admin", AdminSchema);
