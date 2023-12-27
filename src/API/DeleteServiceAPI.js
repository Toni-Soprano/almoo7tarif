import axios from "axios";
import Global from "../util/Global";

function DeleteServiceAPI(idservice) {
  try {
    let URL = Global.BaseUrl + "/DeleteService";
    const id = idservice;
    return axios.delete(URL+'/'+id).then((response) => {
      return response;
    });
  } catch (error) {
    throw new Error(error);
  }
}

export default DeleteServiceAPI;
