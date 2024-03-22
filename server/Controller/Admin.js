const Admin = require("../Models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const imageDefault = "ea812f86f71070e6ec6d21a3a0be8328.png";

/******************************************************************RegistreAdmin*******************************************************************************/
const RegistreAdmin = async (req, res) => {
  const { nom, prenom, email, mdp, tel, date_naissance, genre } = req.body;
  const image = req.file ? req.file.filename : imageDefault;

  try {
    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
      return res.status(201).json({ msg: "admin existe" });
    }
    const hashedPassword = await bcrypt.hash(mdp, 10);
    const newUser = new Admin({
      nom,
      prenom,
      email: email.toLowerCase(),
      tel,
      date_naissance,
      genre,
      image,
      mdp: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ msg: "ok", user: newUser });
  } catch (error) {
    res.status(201).json({
      msg: "Erreur lors de la création de l'utilisateur",
      error: error,
    });
  }
};
/******************************************************************LoginAdmin*******************************************************************************/

const LoginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email: email.toLowerCase() });

    if (!admin) {
      return res.status(201).json({ msg: "admin non trouvé" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.mdp);

    if (!isPasswordValid) {
      return res.status(201).json({ msg: "Mot de passe incorrect" });
    }

    const token = jwt.sign({ userId: admin._id }, "votre-secret-key", {
      expiresIn: "1h",
    });

    res.status(201).json({ msg: "ok", token, admin });
  } catch (error) {
    res.status(500).json({ msg: "Erreur lors de la connexion", error });
  }
};

module.exports = { RegistreAdmin, LoginAdmin };
