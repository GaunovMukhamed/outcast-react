export interface SuccessResponse {
  message: string;
}

export type Gender = 'мужчина' | 'женщина';

export interface MainStats {
  strength: number;
  agility: number;
  intelligence: number;
  charisma: number;
}

export interface Race {
  name: string;
  description: string;
  inintialStats: MainStats;
} 

export interface Character {
  _id: string;
  login: string;
  name: string;
  level: number;
  race: string;
}