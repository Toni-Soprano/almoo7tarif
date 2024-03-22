const Service = require("../Models/Service");
const imageDefault = "";

/******************************************************************RegistreService*******************************************************************************/

const RegistreService = async (req, res) => {
  const { nom_FR, nom_AR, Description } = req.body;
  const coverURI =
    req.file && req.file.filename ? req.file.filename : imageDefault;

  try {
    const existingService = await Service.findOne({ nom_FR });

    if (existingService) {
      return res.status(201).json({ msg: "Service existe" });
    }
    const service = new Service({
      nom_FR,
      nom_AR,
      Description,
      coverURI,
    });

    await service.save();

    res.status(201).json({ msg: "ok", service: service });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur lors de la création de la service",
      error: error,
    });
  }
};
/******************************************************************GetAllServices*******************************************************************************/

const GetAllServices = async (req, res) => {
  try {
    const services = await Service.find({});

    res.status(201).send({ results: services, msg: "ok" });
  } catch (error) {
    res.status(500).send({ msg: "Erreur lors de la récupération des données" });
  }
};

/******************************************************************GetSingleServiceById*******************************************************************************/

const GetSingleServiceById = async (req, res) => {
  const { idservice } = req.body;
  try {
    const services = await Service.findOne({ _id: idservice });

    res.status(201).send({ results: services, msg: "ok" });
  } catch (error) {
    res.status(500).send({ msg: "Erreur lors de la récupération des données" });
  }
};

/******************************************************************UpdateService*******************************************************************************/

const UpdateService = async (req, res) => {
  const { idservice, nom_FR, nom_AR, Description } = req.body;

  try {
    const service = await Service.findOne({ _id: idservice });

    if (!service) {
      return res.status(200).json({ msg: "Service non trouvé" });
    }

    service.nom_FR = nom_FR;
    service.nom_AR = nom_AR;
    service.Description = Description;

    await service.save();

    res.status(200).json({ msg: "ok", service: service });
  } catch (error) {
    res.status(200).json({
      msg: "Erreur lors de la mise à jour du service",
      error: error,
    });
  }
};

/******************************************************************DeleteService*******************************************************************************/

const DeleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Service.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(200).json({ msg: "Service introuvable" });
    }

    res.status(200).json({ msg: "ok", result: result });
  } catch (error) {
    res
      .status(200)
      .json({ msg: "Erreur lors de la suppression du service", error: error });
  }
};

module.exports = {
  RegistreService,
  GetAllServices,
  GetSingleServiceById,
  UpdateService,
  DeleteService,
};
