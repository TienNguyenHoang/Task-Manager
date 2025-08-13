/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import { LoginApi } from '~/services';
import type { UserProfile, LoginRequest } from '~/Models';

type UserContextType = {
    user: UserProfile | null;
    login: (LoginRequest: LoginRequest) => void;
    logout: () => void;
};

const AuthContext = createContext<UserContextType>({} as UserContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserProfile | null>(() => {
        const storeUser = localStorage.getItem('user');
        const accessTokenCookie = Cookies.get('accessToken');
        return storeUser && accessTokenCookie ? JSON.parse(storeUser) : null;
    });

    const navigate = useNavigate();
    const location = useLocation();

    const login = async (LoginRequest: LoginRequest) => {
        const LoginRequestDto: LoginRequest = {
            email: LoginRequest.email,
            password: LoginRequest.password,
        };
        const data = await LoginApi(LoginRequestDto);
        if (data) {
            const redirectTo = location.state?.from?.pathname || '/';
            toast.success('Đăng nhập thành công');
            Cookies.set('accessToken', data.token, { expires: 5 });
            navigate(redirectTo, { replace: true });
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
    };

    const logout = () => {
        Cookies.remove('accessToken');
        setUser(null);
        localStorage.removeItem('user');
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
