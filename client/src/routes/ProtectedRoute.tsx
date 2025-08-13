import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '~/Context';
import config from '~/config';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const { user } = useAuth();
    console.log('user: ', user);
    if (!user) return <Navigate to={config.routes.login} state={{ from: location }} replace />;
    return children;
};

export default ProtectedRoute;
