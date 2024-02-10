import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://plotter-task.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
