export interface SuccessResponse {
  message: string;
}

export interface Character {
  _id: string;
  login: string;
  name: string;
  level: number;
  race: string;
}