import React from 'react';
import type { Props } from '~/layouts';

const LoginLayout: React.FC<Props> = ({ children }) => {
    return <div className="bg-gradient-color flex h-screen w-full items-center justify-center">{children}</div>;
};

export default LoginLayout;
