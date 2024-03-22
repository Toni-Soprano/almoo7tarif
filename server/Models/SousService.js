var mongoose = require("mongoose");
var SousServiceSchema = new mongoose.Schema(
  {
    nom_FR: String,
    nom_AR: String,
    Description: String,
    prix: Number,
    IdService: {
      type: mongoose.Schema.ObjectId,
      ref: "service",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SousService", SousServiceSchema);
