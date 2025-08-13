import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

import { handleError } from '~/Helpers';

const httpRequest = axios.create({
    baseURL: 'https://localhost:7241/api/',
    timeout: 10000,
});

httpRequest.interceptors.request.use(
    (config) => {
        const token = Cookies.get('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

httpRequest.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log('error from interceptor', error);
        if (error.response) {
            handleError(error);
        } else if (error.request) {
            toast.error('Không nhận được phản hồi từ server');
        } else {
            toast.error('Lỗi cấu hình request', error.message);
        }
        return Promise.reject(error);
    },
);

export default httpRequest;
