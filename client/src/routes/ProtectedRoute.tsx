import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~/Context';
import config from '~/config';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useAuth();
    if (!user) return <Navigate to={config.routes.login} />;
    return children;
};

export default ProtectedRoute;
