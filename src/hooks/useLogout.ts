'use client';

import { removeAccessToken } from '../utils/manageCookie';

export const useLogout = () => {
    const logout = () => {
        removeAccessToken('accessToken');
    };

    return { logout };
};
