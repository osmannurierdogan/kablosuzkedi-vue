import axios from "axios";
export const appAxios = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  header: {
    toxenX: "myToken",
    "Content-Type": "application/json",
  },
});
export default appAxios;
