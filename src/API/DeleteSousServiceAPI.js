import axios from "axios";
import Global from "../util/Global";

function DeleteSousServiceAPI(id) {
  try {
    let URL = Global.BaseUrl + "/DeleteSousService";
    return axios.delete(URL + "/" + id).then((response) => {
      return response;
    });
  } catch (error) {
    throw new Error(error);
  }
}

export default DeleteSousServiceAPI;
