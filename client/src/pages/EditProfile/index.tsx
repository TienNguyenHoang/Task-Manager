import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { UserIcon, UserCircleIcon, EmailIcon, SecurityIcon, PasswordIcon, SaveChangesIcon } from '~/components/Icons';
import type { EditProfileRequest } from '~/Models';
import { useAuth } from '~/Context';
import { useEffect } from 'react';

const editProfileSchema = yup.object({
    fullName: yup.string().required('Vui lòng nhập họ tên').min(6, 'Tối thiểu 6 ký tự!').max(20, 'Tối đa 20 ký tự'),
    email: yup.string().required('Vui lòng nhập email!').email('Sai định dạng email'),
});

const changePasswordSchema = yup.object({
    oldPassword: yup.string().required('Vui lòng nhập mật khẩu hiện tại!'),
    newPassword: yup
        .string()
        .required('Vui lòng nhập mật khẩu mới!')
        .min(6, 'Tối thiểu 6 ký tự!')
        .max(20, 'Tối đa 20 ký tự'),
    confirmPassword: yup
        .string()
        .required('Vui lòng nhập lại mật khẩu mới!')
        .oneOf([yup.ref('newPassword')], 'Mật khẩu nhập lại không khớp'),
});

type ChangePasswordForm = yup.InferType<typeof changePasswordSchema>;

const EditProfile = () => {
    const { user, editProfileUser, changePassword } = useAuth();
    const {
        register: registerProfile,
        handleSubmit: handleSubmitProfile,
        formState: { errors: errorsProfile },
        reset,
    } = useForm<EditProfileRequest>({
        defaultValues: {
            fullName: '',
            email: '',
        },
        resolver: yupResolver(editProfileSchema),
    });

    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
        formState: { errors: errorsPassword },
    } = useForm<ChangePasswordForm>({
        resolver: yupResolver(changePasswordSchema),
    });

    useEffect(() => {
        if (user) {
            reset({
                fullName: user.fullName,
                email: user.email,
            });
        }
    }, [user, reset]);

    const onEditProfileSubmit = async (form: EditProfileRequest) => {
        editProfileUser(form);
    };

    const onChangePasswordSubmit = (form: ChangePasswordForm) => {
        changePassword(form);
    };

    return (
        <div className="px-20 py-10">
            <div className="flex items-center gap-3">
                <div>
                    <UserIcon className="bg-gradient-color size-18 rounded-full p-2 text-white" />
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">Cài đặt thông tin cá nhân</h1>
                    <p className="ml-1 text-xs text-gray-700/60">Quản lý thông tin cá nhân và bảo mật</p>
                </div>
            </div>
            <div className="mt-7 flex gap-10">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-1">
                        <UserCircleIcon className="text-main inline-block" />
                        <span className="text-md font-bold">Thông tin cá nhân</span>
                    </div>
                    <form onSubmit={handleSubmitProfile(onEditProfileSubmit)} className="mt-5">
                        <div className="flex flex-col justify-center">
                            <div className="form-input">
                                <UserIcon className="text-side mr-2" />
                                <input
                                    className="flex-1 caret-(--color-main) outline-none"
                                    type="text"
                                    spellCheck={false}
                                    {...registerProfile('fullName')}
                                    placeholder="Họ tên"
                                />
                            </div>
                            {errorsProfile.fullName && (
                                <p className="text-xs text-red-500">{errorsProfile.fullName.message}</p>
                            )}
                            <div className="form-input">
                                <EmailIcon className="text-side mr-2" />
                                <input
                                    className="flex-1 caret-(--color-main) outline-none"
                                    type="email"
                                    spellCheck={false}
                                    {...registerProfile('email')}
                                    placeholder="Email"
                                />
                            </div>
                            {errorsProfile.email && (
                                <p className="text-xs text-red-500">{errorsProfile.email.message}</p>
                            )}
                            <button
                                type="submit"
                                className="bg-gradient-color my-2 flex h-8 w-full cursor-pointer items-center justify-center gap-[6px] rounded-lg font-bold text-white hover:shadow-lg"
                            >
                                <SaveChangesIcon className="inline-block" />
                                <span className="mt-[2px] inline-block">Cập nhật</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-1">
                        <SecurityIcon className="text-main inline-block" />
                        <span className="text-md font-bold">Bảo mật</span>
                    </div>
                    <form onSubmit={handleSubmitPassword(onChangePasswordSubmit)} className="mt-5">
                        <div className="flex flex-col justify-center">
                            <div className="form-input">
                                <PasswordIcon className="text-side mr-2" />
                                <input
                                    className="flex-1 caret-(--color-main) outline-none"
                                    type="text"
                                    spellCheck={false}
                                    {...registerPassword('oldPassword')}
                                    placeholder="Mật khẩu hiện tại"
                                />
                            </div>
                            {errorsPassword.oldPassword && (
                                <p className="text-xs text-red-500">{errorsPassword.oldPassword.message}</p>
                            )}
                            <div className="form-input">
                                <PasswordIcon className="text-side mr-2" />
                                <input
                                    className="flex-1 caret-(--color-main) outline-none"
                                    type="text"
                                    spellCheck={false}
                                    {...registerPassword('newPassword')}
                                    placeholder="Mật khẩu mới"
                                />
                            </div>
                            {errorsPassword.newPassword && (
                                <p className="text-xs text-red-500">{errorsPassword.newPassword.message}</p>
                            )}
                            <div className="form-input">
                                <PasswordIcon className="text-side mr-2" />
                                <input
                                    className="flex-1 caret-(--color-main) outline-none"
                                    type="text"
                                    spellCheck={false}
                                    {...registerPassword('confirmPassword')}
                                    placeholder="Xác nhận mật khẩu"
                                />
                            </div>
                            {errorsPassword.confirmPassword && (
                                <p className="text-xs text-red-500">{errorsPassword.confirmPassword.message}</p>
                            )}
                            <button
                                type="submit"
                                className="bg-gradient-color my-2 flex h-8 w-full cursor-pointer items-center justify-center gap-[6px] rounded-lg font-bold text-white hover:shadow-lg"
                            >
                                <SecurityIcon className="inline-block" />
                                <span className="mt-[2px] inline-block">Đổi mật khẩu</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
