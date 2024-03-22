const Contact = require("../Models/Contact");

/******************************************************************CreateContact*******************************************************************************/

const CreateContact = async (req, res) => {
  const { email, sujet, message, IdUser } = req.body;
  try {
    const contact = new Contact({
      email,
      sujet,
      message,
      IdUser,
    });

    const result = await contact.save();

    if (result) {
      res.status(201).send({ msg: "ok", Newcontact: contact });
    }
  } catch (err) {
    res.status(500).send({ msg: "Erreur", err });
  }
};

/******************************************************************GetAllContact*******************************************************************************/

const GetAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find({}).populate("IdUser");

    if (contacts) {
      res.status(201).send({ msg: "ok", contacts: contacts });
    }
  } catch (err) {
    res.status(500).send({ msg: "Erreur", err });
  }
};
/******************************************************************GetContactByID*******************************************************************************/
const GetContactByID = async (req, res) => {
  const { IdContact } = req.body;

  try {
    const contact = await Contact.findOne({ _id: IdContact }).populate(
      "IdUser"
    );

    if (contact) {
      res.status(201).send({ msg: "ok", contact: contact });
    }
  } catch (err) {
    res.status(500).send({ msg: "Erreur", err });
  }
};
/******************************************************************GetAllContactByIdUser*******************************************************************************/

const GetAllContactByIdUser = async (req, res) => {
  const { IdUser } = req.body;

  try {
    const contact = await Contact.find({ IdUser: IdUser }).populate("IdUser");

    if (contact) {
      res.status(201).send({ msg: "ok", contact: contact });
    }
  } catch (err) {
    res.status(500).send({ msg: "Erreur", err });
  }
};
/******************************************************************ReplayMessageBydAdmin*******************************************************************************/

const ReplayMessageByAdmin = async (req, res) => {
  const { IdContact, replay } = req.body;

  try {
    const contact = await Contact.findOne({ _id: IdContact });

    if (contact) {
      contact.replay = replay;
      contact.etat = "1";

      res.status(201).send({ msg: "ok", NewContact: contact });
    }
  } catch (err) {
    res.status(500).send({ msg: "Erreur", err });
    console.log(err);
  }
};

module.exports = {
  CreateContact,
  GetAllContact,
  GetContactByID,
  GetAllContactByIdUser,
  ReplayMessageByAdmin,
};
