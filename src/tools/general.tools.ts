export const saveLoginToStorage = (login: string): void => {
  if(login.length) localStorage.setItem('login', login);
}

export const getLoginFromStorage = (): string | null => {
  return localStorage.getItem('login');
}

export const saveCharacterToStorage = (id: number) => {
  localStorage.setItem('characterId', id.toString());
}

export const getCharacterFromStorage = (): number | null => {
  const savedCharacterId: string | null = localStorage.getItem('characterId');
  return savedCharacterId ? +savedCharacterId : null;
}