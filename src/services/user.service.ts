import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://todo-node-express-postgresql.herokuapp.com/api/user";

class UserService {
  getUsers() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  getUser(id: string) {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
  }

  getUserTaskGroups(id: string) {
    return axios.get(API_URL + "/" + id + "/task-groups", { headers: authHeader() });
  }
}

export default new UserService();
