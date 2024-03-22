const Reservation = require("../Models/Reservation");

/******************************************************************CreateRéservation*******************************************************************************/

const CreateReservation = async (req, res) => {
  const { date, time, adresse, IdSousService, IdUser, autres_information } =
    req.body;
  try {
    const reservation = new Reservation({
      date,
      time,
      adresse,
      IdSousService,
      IdUser,
      autres_information,
    });

    const result = await reservation.save();

    if (result) {
      res.status(201).send({ msg: "ok", reservation: reservation });
    }
  } catch (err) {
    res.status(500).send({ msg: "Erreur", err });
  }
};

/******************************************************************GetAllRéservation*******************************************************************************/
const GetAllReservation = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate({
        path: "IdSousService",
        populate: {
          path: "IdService",
        },
      })
      .populate("IdUser");

    res.status(201).send({ results: reservations, msg: "ok" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Erreur lors de la récupération des données", error });
  }
};

/******************************************************************GetReservationById*******************************************************************************/
const GetReservationById = async (req, res) => {
  const { IdResrveraion } = req.body;
  try {
    const reservation = await Reservation.findOne({ _id: IdResrveraion })
    .populate({
      path: "IdSousService",
      populate: {
        path: "IdService",
      },
    })
    .populate("IdUser");

    res.status(201).send({ results: reservation, msg: "ok" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Erreur lors de la récupération des données", error });
  }
};
/******************************************************************GetReservationByIdUser*******************************************************************************/
const GetReservationByIdUser = async (req, res) => {
  const { IdUser } = req.body;
  try {
    const reservations = await Reservation.find({ IdUser: IdUser })
      .populate({
        path: "IdSousService",
        populate: {
          path: "IdService",
        },
      })
      .populate("IdUser");
    res.status(201).send({ results: reservations, msg: "ok" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Erreur lors de la récupération des données", error });
  }
};
/******************************************************************ChangeEtatByAdmin*******************************************************************************/
const ChangeEtatReservationByAdmin = async (req, res) => {
  const { IdResrveraion, Newetat } = req.body;
  try {
    const reservation = await Reservation.findOne({ _id: IdResrveraion });
    reservation.etat = Newetat;
    reservation.save();
    res.status(201).send({ newReservation: reservation, msg: "ok" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Erreur lors de la récupération des données", error });
  }
};
/******************************************************************AnnulerRéservationByUser*******************************************************************************/

const AnnulerReservationByUser = async (req, res) => {
  const { IdResrveraion } = req.body;
  try {
    const reservation = await Reservation.findOne({ _id: IdResrveraion });
    reservation.etat = "-1";
    reservation.save();
    res.status(201).send({ newReservation: reservation, msg: "ok" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Erreur lors de la récupération des données", error });
  }
};

module.exports = {
  CreateReservation,
  GetAllReservation,
  GetReservationById,
  GetReservationByIdUser,
  ChangeEtatReservationByAdmin,
  AnnulerReservationByUser,
};
