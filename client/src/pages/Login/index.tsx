import { Link } from 'react-router-dom';
import config from '~/config';
import { EmailIcon, PasswordIcon, LogInIcon } from '~/components/Icons';

const Login = () => {
    return (
        <div className="login-box">
            <LogInIcon className="bg-gradient-color m-5 self-center rounded-full p-3 text-white" />
            <h1 className="self-center text-3xl font-bold">Chào mừng</h1>
            <p className="my-2 self-center text-xs">Đăng nhập để tiếp tục với TaskManager</p>
            <div className="form-input">
                <EmailIcon className="text-side mr-2" />
                <input className="flex-1 caret-(--color-main) outline-none" type="email" required placeholder="Email" />
            </div>
            <div className="form-input">
                <PasswordIcon className="text-side mr-2" />
                <input
                    className="flex-1 caret-(--color-main) outline-none"
                    type="password"
                    required
                    placeholder="Mật khẩu"
                />
            </div>
            <div className="my-1 flex items-center">
                <input type="checkbox" className="accent-(--color-side)" />
                <label className="ml-1 text-sm">Nhớ thông tin</label>
            </div>

            <button className="bg-gradient-color my-2 h-8 w-full cursor-pointer rounded-lg font-bold text-white hover:shadow-lg">
                Đăng nhập
            </button>
            <div className="mt-2 text-center text-sm">
                <p className="mr-1 inline-block">Bạn chưa có tài khoản?</p>
                <Link className="text-main hover:underline" to={config.routes.register}>
                    Đăng ký
                </Link>
            </div>
        </div>
    );
};

export default Login;
