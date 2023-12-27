import axios from "axios";
import Global from "../util/Global";
function UpdateSousServiceAPI(
  idSousservice,
  nom_FR1,
  nom_AR1,
  Description1,
  prix1,
  IdService1
) {
  try {
    let URL = Global.BaseUrl + "/UpdateSousService";

    var data = JSON.stringify({
      idSousservice: idSousservice,
      IdService: IdService1,
      nom_FR: nom_FR1,
      nom_AR: nom_AR1,
      Description: Description1,
      prix: prix1,
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

export default UpdateSousServiceAPI;
