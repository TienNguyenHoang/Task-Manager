import { NavLink } from 'react-router-dom';
import config from '~/config';

function Home() {
    return (
        <div>
            <NavLink to={config.routes.dashboard}>Dashboard</NavLink>
            <NavLink to={config.routes.completed}>Completed Task</NavLink>
            <NavLink to={config.routes.pending}>Pending Task</NavLink>
            <NavLink to={config.routes.editProfile}>EditProfile</NavLink>
        </div>
    );
}

export default Home;
