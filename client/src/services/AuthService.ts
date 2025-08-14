import { request } from '@utils';
import type { LoginRequest, LoginResponse, RegisterRequest } from '~/Models';

export const LoginApi = async (form: LoginRequest) => {
    try {
        const response = await request.post<LoginResponse>('Auth/login', form);
        return response.data;
    } catch (err) {
        console.log('error from LoginAPI', err);
    }
};

export const RegisterApi = async (form: RegisterRequest) => {
    try {
        const response = await request.post<{ message: string }>('Auth/register', form);
        return response.data;
    } catch (err) {
        console.log('error from RegisterAPI', err);
    }
};
