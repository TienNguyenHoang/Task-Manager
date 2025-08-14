import config from '~/config';
import * as Pages from '~/pages';
import * as Layouts from '~/layouts';
import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';

const routes = [
    { path: config.routes.login, component: Pages.Login, layout: Layouts.LoginLayout, guest: GuestRoute },
    { path: config.routes.register, component: Pages.Register, layout: Layouts.LoginLayout, guest: GuestRoute },
    { path: config.routes.home, component: Pages.Home, layout: Layouts.default },
    { path: config.routes.dashboard, component: Pages.Dashboard, layout: Layouts.default, protected: ProtectedRoute },
    {
        path: config.routes.editProfile,
        component: Pages.EditProfile,
        layout: Layouts.default,
        protected: ProtectedRoute,
    },
    { path: config.routes.pending, component: Pages.PendingTask, layout: Layouts.default, protected: ProtectedRoute },
    {
        path: config.routes.completed,
        component: Pages.CompletedTask,
        layout: Layouts.default,
        protected: ProtectedRoute,
    },
];

export default routes;
