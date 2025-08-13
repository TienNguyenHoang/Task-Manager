import config from '~/config';
import * as Pages from '~/pages';
import * as Layouts from '~/layouts';

const routes = [
    { path: config.routes.login, component: Pages.Login, layout: Layouts.LoginLayout, authenticate: false },
    { path: config.routes.register, component: Pages.Register, layout: Layouts.LoginLayout, authenticate: false },
    { path: config.routes.home, component: Pages.Home, layout: Layouts.default, authenticate: false },
    { path: config.routes.dashboard, component: Pages.Dashboard, layout: Layouts.default, authenticate: true },
    { path: config.routes.editProfile, component: Pages.EditProfile, layout: Layouts.default, authenticate: true },
    { path: config.routes.pending, component: Pages.PendingTask, layout: Layouts.default, authenticate: true },
    { path: config.routes.completed, component: Pages.CompletedTask, layout: Layouts.default, authenticate: true },
];

export default routes;
