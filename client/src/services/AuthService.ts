import { request } from '@utils';
import type { LoginRequest, LoginResponse } from '~/Models';

export const LoginApi = async (form: LoginRequest) => {
    try {
        const response = await request.post<LoginResponse>('Auth/login', form);
        return response.data;
    } catch (err) {
        console.log('error from LoginAPI', err);
    }
};
