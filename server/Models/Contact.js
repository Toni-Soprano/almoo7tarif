var mongoose = require("mongoose");
var ContactSchema = new mongoose.Schema(
  {
    email: String,
    sujet: String,
    message: String,
    IdUser: {
      type: mongoose.Schema.ObjectId,
      ref: "utilisateur",
    },
    etat: {
      type: String,
      default: "0",
    },
    replay: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", ContactSchema);
