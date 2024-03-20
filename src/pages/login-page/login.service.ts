import axios from "axios"
import { SuccessResponse } from "../../models";

const address: string = process.env.REACT_APP_API_ADDRESS!;

export const loginUser = (login: string): Promise<SuccessResponse> => {
  return axios.post(address + '/login', { login })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}