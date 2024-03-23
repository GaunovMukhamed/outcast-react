import axios from "axios";
import { SuccessResponse } from "../../models";

export const loginUser = (login: string): Promise<SuccessResponse> => {
  return axios.post('/users/login', { login })
}