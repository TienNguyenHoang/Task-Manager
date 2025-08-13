import React from 'react';
import type { Props } from '~/layouts';

const MainLayout: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};
export default MainLayout;
