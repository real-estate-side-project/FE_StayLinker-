import { getCookie, setCookie, deleteCookie } from 'cookies-next';

const setAccessToken = (name: string, value: string) => {
  return setCookie(name, value);
};

const getAccessToken = (name: string) => {
  return getCookie(name);
};

const removeAccessToken = (name: string, options?: any) => {
  return deleteCookie(name, { ...options });
};

export { setAccessToken, getAccessToken, removeAccessToken };
