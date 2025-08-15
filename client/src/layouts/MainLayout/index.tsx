import React, { type ReactNode } from 'react';

import { Header, SideBar } from '~/components';

type Props = {
    children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="">
            <Header />
            <div className="fixed top-25 right-0 bottom-0 left-0 flex">
                <SideBar />
                <div className="flex-1 bg-gray-300/10">{children}</div>
            </div>
        </div>
    );
};
export default MainLayout;
