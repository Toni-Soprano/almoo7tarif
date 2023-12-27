import axios from "axios";
import Global from "../util/Global";
function AddSousServiceAPI(nom_FR, nom_AR, Description, prix, IdService) {
  try {
    let URL = Global.BaseUrl + "/CreateSousService";

    var data = JSON.stringify({
      nom_FR: nom_FR,
      nom_AR: nom_AR,
      Description: Description,
      prix: prix,
      IdService: IdService,
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

export default AddSousServiceAPI;
