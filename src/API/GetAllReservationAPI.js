import axios from "axios";
import Global from "../util/Global";
function GetAllReservationAPI() {
  try {
    let URL = Global.BaseUrl + "/GetAllReservation";

    return axios
      .post(URL, {
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

export default GetAllReservationAPI;
