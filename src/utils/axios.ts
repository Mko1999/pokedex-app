import axios from "axios";

const MAIN_API = "https://pokeapi.co/api/v2/";

const api = axios.create({
  baseURL: MAIN_API,
});
export default api;
