import axios from "axios";
import { Character } from "../../models";

export const getCharacters = (login: string): Promise<Character[]> => {
  return axios.post('/characters', { login })
}