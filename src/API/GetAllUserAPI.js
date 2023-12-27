import axios from "axios";
import Global from "../util/Global";
function GetAllUserAPI() {
  try {
    let URL = Global.BaseUrl + "/FindAllUsers";

    return axios
      .get(URL, {
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

export default GetAllUserAPI;
