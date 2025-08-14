import { useAuth } from '~/Context';
import { LogoIcon, SettingIcon, UserIcon, HeaderMenuIcon } from '../Icons';

const Header = () => {
    const { user } = useAuth();
    console.log('user from header', user);

    return (
        <div className="fixed top-0 right-0 left-0 flex justify-between px-30 py-5 shadow-md">
            <div className="flex items-center justify-center">
                <LogoIcon className="text-white" />
                <span className="bg-gradient-color ml-2 bg-clip-text text-2xl font-bold text-transparent">
                    Task Manager
                </span>
            </div>
            <div className="flex items-center justify-center">
                <SettingIcon />
                <div className="ml-8 flex">
                    <UserIcon className="bg-gradient-color size-10 rounded-full p-2 text-white" />
                    <div className="mx-2">
                        <h1 className="text-sm font-bold">{user?.fullName}</h1>
                        <span className="text-xs text-gray-500">{user?.email}</span>
                    </div>
                    <HeaderMenuIcon className="mt-2 size-5 text-gray-500/100" />
                </div>
            </div>
        </div>
    );
};

export default Header;
