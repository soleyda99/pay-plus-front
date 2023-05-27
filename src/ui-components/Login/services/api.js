import { api } from "../../../providers/api";

export async function postLogin(data) {
  try {
    const response = await api.post("/admin/login", data);
    return response;
  } catch (err) {
    return err.response.data;
  }
}
