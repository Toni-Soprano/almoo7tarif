import axios from "axios";
import Global from "../util/Global";
function BlockUserAPI(userId) {
  try {
    let URL = Global.BaseUrl + "/BlockUser";

    var data = JSON.stringify({
      userId: userId,
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

export default BlockUserAPI;
