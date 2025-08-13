import { Link, useLocation } from 'react-router-dom';
import config from '~/config';
import { UserIcon, EmailIcon, PasswordIcon, RegisterIcon } from '~/components/Icons';

const Register = () => {
    const location = useLocation();
    console.log('location state', location.state);
    const handleSubmit = () => {};
    return (
        <form onSubmit={handleSubmit} className="min-h-[50%] min-w-[25%]">
            <div className="login-box">
                <RegisterIcon className="bg-gradient-color m-5 self-center rounded-full p-3 text-white" />
                <h1 className="self-center text-3xl font-bold">Tạo tài khoản</h1>
                <p className="my-2 self-center text-xs">Tham gia TaskManager để quản lý công việc của bạn</p>
                <div className="form-input">
                    <UserIcon className="text-side mr-2" />
                    <input
                        className="flex-1 caret-(--color-main) outline-none"
                        type="text"
                        required
                        spellCheck={false}
                        placeholder="Họ tên"
                    />
                </div>
                <div className="form-input">
                    <EmailIcon className="text-side mr-2" />
                    <input
                        className="flex-1 caret-(--color-main) outline-none"
                        type="email"
                        required
                        spellCheck={false}
                        placeholder="Email"
                    />
                </div>
                <div className="form-input">
                    <PasswordIcon className="text-side mr-2" />
                    <input
                        className="flex-1 caret-(--color-main) outline-none"
                        type="password"
                        required
                        spellCheck={false}
                        placeholder="Mật khẩu"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-gradient-color my-2 h-8 w-full cursor-pointer rounded-lg font-bold text-white hover:shadow-lg"
                >
                    Đăng ký
                </button>
                <div className="mt-2 text-center text-sm">
                    <p className="mr-1 inline-block">Bạn đã có tài khoản?</p>
                    <Link className="text-main hover:underline" to={config.routes.login}>
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default Register;
