import axios from "axios";
import Global from "../util/Global";
function GetServiceById(idservice) {
  try {
    let URL = Global.BaseUrl + "/GetSingleServiceById";

    var data = JSON.stringify({
      idservice: idservice,
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

export default GetServiceById;
