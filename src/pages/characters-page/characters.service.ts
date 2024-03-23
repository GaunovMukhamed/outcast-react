import { Character } from "../../models";
import { http } from "../../tools/axios.interceptor";

export const getCharacters = (login: string): Promise<Character[]> => {
  return http.post('/characters', { login })
}