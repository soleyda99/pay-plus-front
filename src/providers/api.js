import axios from "axios";
import { getToken } from "../helpers/auth";
import config from "./config";

export const BASE_URL = config.API.URL;

const authHeader = () => {
  return {
    Authorization: `Bearer ${getToken()}`,
  };
};

export const api = axios.create({
  baseURL: BASE_URL,
  headers: authHeader(),
  responseType: "json",
});
