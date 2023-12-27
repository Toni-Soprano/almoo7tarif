import axios from "axios";
import Global from "../util/Global";
function ChangeEtatReservationAPI(id, etat) {
  try {
    let URL = Global.BaseUrl + "/ChangeEtatReservationByAdmin";

    var data = JSON.stringify({
      IdResrveraion: id,
      Newetat: etat,
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

export default ChangeEtatReservationAPI;
