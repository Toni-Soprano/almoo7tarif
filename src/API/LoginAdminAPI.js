import axios from "axios";
import Global from "../util/Global";
function LoginAdminApi(email, password) {
  try {
    let URL = Global.BaseUrl + "/LoginAdmin";

    var data = JSON.stringify({
      email: email,
      password: password,
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

export default LoginAdminApi;
