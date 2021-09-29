import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL + "/api/task";

class TaskService {
  /**
   * Create a Task in the specified TaskGroup
   * @param id Taskgroup id
   * @param payload Task body
   * @returns a Task
   */
  createTask(id: number, payload: object) {
    return axios.post(API_URL + "/" + id, { headers: authHeader(), body: payload });
  }

  /**
   * Retrieve all Tasks, Admin only
   * @returns Tasks
   */
  getTasks() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  /**
   * Retrieve a Task by id
   * @param id Task id
   * @returns Task
   */
  getTask(id: number) {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
  }

  /**
   * Update a Task by id
   * @param id Task id
   * @param payload Task body
   * @returns The new Task
   */
  updateTask(id: number, payload: object) {
    return axios.put(API_URL + "/" + id, payload, { headers: authHeader() });
  }

  /**
   * Delete a Task by id
   * @param id
   * @returns
   */
  deleteTask(id: number) {
    return axios.delete(API_URL + "/" + id, { headers: authHeader() });
  }
}

export default new TaskService();
