import axios from "axios";
import Global from "../util/Global";
function GetSignleReservationAPI(id) {
  try {
    let URL = Global.BaseUrl + "/GetReservationById";

    var data = JSON.stringify({
      IdResrveraion: id,
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

export default GetSignleReservationAPI;
