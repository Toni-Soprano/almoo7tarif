const SousService = require("../Models/SousService");

/******************************************************************CreateSousService*******************************************************************************/

const CreateSousService = async (req, res) => {
  const { nom_FR, nom_AR, Description, IdService, prix } = req.body;
  try {
    const Sousservice = new SousService({
      nom_FR,
      nom_AR,
      Description,
      prix,
      IdService,
    });

    const result = await Sousservice.save();

    if (result) {
      res.status(201).send({ msg: "ok", Sousservice: Sousservice });
    }
  } catch (err) {
    res.status(500).send({ msg: "Erreur", err });
  }
};

/******************************************************************GetAllSousServices*******************************************************************************/

const GetAllSousServices = async (req, res) => {
  try {
    const sousServices = await SousService.find().populate("IdService");

    res.status(201).send({ results: sousServices, msg: "ok" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Erreur lors de la récupération des données", error });
  }
};

/******************************************************************GetSingleSousServiceById*******************************************************************************/

const GetSingleSousServiceById = async (req, res) => {
  const { idSousservice } = req.body;
  try {
    const sousServices = await SousService.findOne({
      _id: idSousservice,
    }).populate("IdService");

    res.status(201).send({ results: sousServices, msg: "ok" });
  } catch (error) {
    res.status(500).send({ msg: "Erreur lors de la récupération des données" });
  }
};
/******************************************************************GetSingleSousServiceByIdService*******************************************************************************/

const GetAllSingleSousServiceByService = async (req, res) => {
  const { IdService } = req.body;
  try {
    const sousServices = await SousService.find({
      IdService: IdService,
    }).populate("IdService");

    res.status(201).send({ results: sousServices, msg: "ok" });
  } catch (error) {
    res.status(500).send({ msg: "Erreur lors de la récupération des données" });
  }
};

/******************************************************************UpdateSousService*******************************************************************************/

const UpdateSousService = async (req, res) => {
  const { idSousservice, nom_FR, nom_AR, Description, prix, IdService } =
    req.body;

  try {
    const sousservice = await SousService.findOne({ _id: idSousservice });

    if (!sousservice) {
      return res.status(200).json({ msg: "Service non trouvé" });
    }

    sousservice.nom_FR = nom_FR;
    sousservice.nom_AR = nom_AR;
    sousservice.Description = Description;
    sousservice.prix = prix;
    sousservice.IdService = IdService;

    await sousservice.save();

    res.status(200).json({ msg: "ok", sousservice: sousservice });
  } catch (error) {
    res.status(200).json({
      msg: "Erreur lors de la mise à jour du sous  service",
      error: error,
    });
  }
};

/******************************************************************DeleteSousService*******************************************************************************/

const DeleteSousService = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await SousService.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(200).json({ msg: "SousService introuvable" });
    }

    res.status(200).json({ msg: "ok", result: result });
  } catch (error) {
    res.status(200).json({
      msg: "Erreur lors de la suppression du SousService",
      error: error,
    });
  }
};

module.exports = {
  CreateSousService,
  GetAllSousServices,
  GetSingleSousServiceById,
  GetAllSingleSousServiceByService,
  UpdateSousService,
  DeleteSousService,
};
