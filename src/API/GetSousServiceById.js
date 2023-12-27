import axios from "axios";
import Global from "../util/Global";
function GetSousServiceById(idSousservice) {
  try {
    let URL = Global.BaseUrl + "/GetSingleSousServiceById";

    var data = JSON.stringify({
      idSousservice: idSousservice,
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

export default GetSousServiceById;
