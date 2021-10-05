import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL + "/api/task-group";

class TaskGroupService {
  /**
   * Create a TaskGroup for the logged in User
   * @param id User id
   * @param payload Taskgroup body
   * @returns a TaskGroup
   */
  createTaskGroup(id: number, payload: object) {
    return axios.post(API_URL + "/" + id, payload, { headers: authHeader() });
  }

  /**
   * Retrieve all TaskGroups, Admin only
   * @returns TaskGroups
   */
  getTaskGroups() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  /**
   * Retrieve a TaskGroup by id
   * @param id TaskGroup id
   * @returns TaskGroup
   */
  getTaskGroup(id: number) {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
  }

  /**
   * Retrieve all Tasks by TaskGroup id owned by the logged in User
   * @returns Tasks
   */
  getTaskGroupTasks(id: number) {
    return axios.get(API_URL + "/" + id + "/tasks", { headers: authHeader() });
  }

  /**
   * Update a TaskGroup by id
   * @param id TaskGroup id
   * @param payload TaskGroup body
   * @returns The new TaskGroup
   */
  updateTaskGroup(id: number, payload: object) {
    return axios.put(API_URL + "/" + id, payload, { headers: authHeader() });
  }

  /**
   * Delete a TaskGroup by id
   * @param id
   * @returns
   */
  deleteTaskGroup(id: number) {
    return axios.delete(API_URL + "/" + id, { headers: authHeader() });
  }
}

export default new TaskGroupService();
