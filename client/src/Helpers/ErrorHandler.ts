/* eslint-disable no-case-declarations */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { toast } from 'react-toastify';

export const handleError = (err: any) => {
    if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        let message = err.response?.data?.message || 'Lỗi không xác định';
        switch (status) {
            case 400:
                // ModelState Error
                const modelStateError = err.response?.data.errors;
                if (typeof modelStateError === 'object') {
                    for (let errorKey in modelStateError) {
                        toast.warning(modelStateError[errorKey][0]);
                    }
                    // BadRequest
                } else {
                    toast.error(`Yêu cầu không hợp lệ: ${message}`);
                }
                break;
            case 401:
                toast.warn(message || 'Vui lòng đăng nhập lại');

                break;
            case 403:
                toast.error(message || 'Bạn không có quyền truy cập');
                break;
            case 404:
                toast.error(message || 'Không tìm thấy tài nguyên');
                break;
            case 500:
                toast.error(message || 'Lỗi server. Vui lòng thử lại sau');
                break;
            default:
                toast.error(message);
        }
    }
};
