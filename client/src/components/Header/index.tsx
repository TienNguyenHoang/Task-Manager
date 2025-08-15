import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { useAuth } from '~/Context';
import { LogoIcon, SettingIcon, UserIcon, HeaderMenuIcon, LogoutIcon } from '../Icons';
import config from '~/config';
import { useState } from 'react';
import { Modal } from '~/components';

const Header = () => {
    const { user, logoutUser } = useAuth();
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    console.log('user from header', user);

    return (
        <div className="sticky top-0 right-0 left-0 flex justify-between bg-white px-30 py-5 shadow-sm">
            <Link to={config.routes.dashboard}>
                <div className="flex items-center justify-center">
                    <div className="bg-gradient-color inline-block rounded-xl p-2">
                        <LogoIcon className="text-white" />
                    </div>

                    <span className="bg-gradient-color ml-2 bg-clip-text text-2xl font-bold text-transparent">
                        Task Manager
                    </span>
                </div>
            </Link>
            <div className="flex items-center justify-center">
                <Tippy content="Settings" placement="bottom" delay={[0, 200]} offset={[0, 15]}>
                    <Link to={config.routes.editProfile}>
                        <SettingIcon className="hover:text-main cursor-pointer transition-transform duration-300 hover:rotate-45" />
                    </Link>
                </Tippy>
                <HeadlessTippy
                    interactive
                    visible={visible}
                    offset={[0, 5]}
                    duration={[0, 300]}
                    animation={false}
                    onClickOutside={() => setVisible(false)}
                    appendTo={document.body}
                    render={(attr) => (
                        <div
                            className="animate-fadeIn rounded-2xl bg-white px-3 py-2 text-sm shadow-md"
                            tabIndex={-1}
                            {...attr}
                        >
                            <Link
                                to={config.routes.editProfile}
                                onClick={() => setVisible(false)}
                                className="flex cursor-pointer items-center gap-1 rounded-2xl p-2 hover:bg-gray-300/20"
                            >
                                <SettingIcon />
                                <span className="flex-1">Cài đặt thông tin</span>
                            </Link>
                            <a
                                onClick={() => {
                                    setVisible(false);
                                    setOpen(true);
                                }}
                                className="flex cursor-pointer items-center gap-1 rounded-2xl p-2 hover:bg-gray-300/20"
                            >
                                <LogoutIcon className="text-red-500" />
                                <span className="flex-1">Đăng xuất</span>
                            </a>
                        </div>
                    )}
                >
                    <div
                        className="group ml-5 flex cursor-pointer rounded-2xl p-2 hover:bg-gray-300/20"
                        onClick={() => setVisible(!visible)}
                    >
                        <div className="relative">
                            <UserIcon className="bg-gradient-color size-10 rounded-full p-2 text-white" />
                            <div className="absolute right-0 bottom-[5px] size-[10px] rounded-full border-[2px] border-white bg-green-500"></div>
                        </div>
                        <div className="mx-2">
                            <h1 className="text-sm font-bold">{user?.fullName}</h1>
                            <span className="text-xs text-gray-500">{user?.email}</span>
                        </div>
                        <HeaderMenuIcon className="group-hover:text-main mt-2 size-5 cursor-pointer text-gray-500/100 transition-transform duration-300 group-hover:rotate-180" />
                    </div>
                </HeadlessTippy>

                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="flex flex-col items-center gap-2">
                        <LogoutIcon className="bg-gradient-color size-16 rounded-full p-3 text-white" />
                        <h1 className="text-lg font-bold">Xác nhận đăng xuất</h1>
                        <p className="text-sm">Bạn có chắc muốn đăng xuất ?</p>
                        <div className="text-md mt-1 flex w-50 font-bold">
                            <button
                                className="bg-gradient-color flex-1 cursor-pointer rounded-tl-2xl rounded-bl-2xl py-1 opacity-85 hover:opacity-100"
                                onClick={logoutUser}
                            >
                                Có
                            </button>
                            <button
                                className="flex-1 cursor-pointer rounded-tr-2xl rounded-br-2xl bg-gray-300 py-1 opacity-85 hover:opacity-100"
                                onClick={() => setOpen(false)}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Header;
