var mongoose = require("mongoose");
var ReservationSchema = new mongoose.Schema(
  {
    date: String,
    time: String,
    adresse: String,
    IdSousService: {
      type: mongoose.Schema.ObjectId,
      ref: "SousService",
    },
    IdUser: {
      type: mongoose.Schema.ObjectId,
      ref: "utilisateur",
    },
    etat: {
      type: String,
      default: "0",
    },
    autres_information: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("reservation", ReservationSchema);
