import axios from "axios";
import Global from "../util/Global";
function AddServiceAPI(nom_FR, nom_AR, Description, coverURI) {
  try {
    let URL = Global.BaseUrl + "/CreateService";

    var data = JSON.stringify({
      nom_FR: nom_FR,
      nom_AR: nom_AR,
      Description: Description,
      coverURI: coverURI,
    });

    return axios
      .post(URL, data, {
        headers: {
          "Content-Type": "application/json",
          charset: "utf-8",
        },
      })
      .then((response) => {
        return response;
      });
  } catch (error) {
    throw new Error(error);
  }
}

export default AddServiceAPI;
