import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/user/";

class UserService {
  getUsers() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  getUser(id: string) {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
  }
}

export default new UserService();
