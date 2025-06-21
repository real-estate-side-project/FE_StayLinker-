import type { CookieSerializeOptions } from 'cookie';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const setAccessToken = (name: string, value: string) => {
    return setCookie(name, value);
};

const getAccessToken = (name: string) => {
    return getCookie(name);
};

const removeAccessToken = (name: string, options?: CookieSerializeOptions) => {
    return deleteCookie(name, { ...options });
};

export { getAccessToken, removeAccessToken, setAccessToken };
