import { Race } from "../../models";
import { http } from "../../tools/axios.interceptor";

export const getRaces = (): Promise<Race[]> => {
  return http.get('/races');
}