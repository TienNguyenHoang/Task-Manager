/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { UserProfile } from '~/Models';

type UserContextType = {
    user: UserProfile | null;
    login: (userData: UserProfile, token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<UserContextType>({} as UserContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserProfile | null>(() => {
        const storeUser = localStorage.getItem('user');
        return storeUser ? JSON.parse(storeUser) : null;
    });

    const login = (userData: UserProfile, token: string) => {
        localStorage.setItem('user', token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
