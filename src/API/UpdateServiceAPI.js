import axios from "axios";
import Global from "../util/Global";
function UpdateServiceAPI(idservice, nom_FR1, nom_AR1, Description1) {
  try {
    let URL = Global.BaseUrl + "/UpdateService";

    var data = JSON.stringify({
      idservice: idservice,
      nom_FR: nom_FR1,
      nom_AR: nom_AR1,
      Description: Description1,
    });

    return axios
      .put(URL, data, {
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

export default UpdateServiceAPI;
