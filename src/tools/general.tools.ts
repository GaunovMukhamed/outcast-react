export const setUserLoginToStorage = (login: string): void => {
  if(login.length) localStorage.setItem('login', login);
}

export const getUserLoginFromStorage = (): string | null => {
  return localStorage.getItem('login');
}