import React, { type ReactNode } from 'react';

import { Header, SideBar, RightBar } from '~/components';

type Props = {
    children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="flex bg-gray-300/10">
                <SideBar />
                <div className="h-[10000px] flex-1 px-20 py-10">{children}</div>
                <RightBar />
            </div>
        </div>
    );
};
export default MainLayout;
