import axios from "axios";

const MAIN_API = "https://pokeapi.co/api/v2/";

const api = axios.create({
  baseURL: MAIN_API,
});

const axiosInstance = axios.create();

export default api;
export { axiosInstance as axios };
