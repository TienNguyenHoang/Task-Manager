/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import { LoginApi, RegisterApi, EditProfileApi, ChangePasswordApi } from '~/services';
import type { UserProfile, LoginRequest, RegisterRequest, EditProfileRequest, ChangePasswordRequest } from '~/Models';

type UserContextType = {
    user: UserProfile | null;
    loginUser: (form: LoginRequest) => void;
    registerUser: (form: RegisterRequest) => void;
    logoutUser: () => void;
    editProfileUser: (form: EditProfileRequest) => void;
    changePassword: (form: ChangePasswordRequest) => void;
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

    const loginUser = async (form: LoginRequest) => {
        const LoginRequestDto: LoginRequest = {
            email: form.email,
            password: form.password,
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

    const registerUser = async (form: RegisterRequest) => {
        const data = await RegisterApi(form);
        if (data) {
            toast.success(data.message);
            navigate('/login', { replace: true });
        }
    };

    const logoutUser = () => {
        if (!user) {
            toast.warning('Không thể đăng xuất khi chưa đăng nhập');
            return;
        }
        Cookies.remove('accessToken');
        setUser(null);
        localStorage.removeItem('user');
        toast.success('Đăng xuất thành công');
        navigate('/login');
    };

    const editProfileUser = async (form: EditProfileRequest) => {
        const data = await EditProfileApi(form);
        if (data) {
            toast.success('Cập nhật thành công!');
            const user: UserProfile = {
                userId: data.userId,
                email: data.email,
                fullName: data.fullName,
            };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
        }
    };

    const changePassword = async (form: ChangePasswordRequest) => {
        const data = await ChangePasswordApi(form);
        if (data) {
            toast.success('Đổi mật khẩu thành công!');
            toast.info('Vui lòng đăng nhập lại!');
            Cookies.remove('accessToken');
            setUser(null);
            localStorage.removeItem('user');
            
            navigate('/login');
        }
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser, registerUser, editProfileUser, changePassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
