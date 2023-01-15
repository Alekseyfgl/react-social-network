import { Navbar } from './Navbar/Navbar';
import s from './Main.module.css';
import { Aside } from './Aside/Aside';
import { Messages } from './Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import { Profile } from './Profile/Profile';
import { News } from './News/News';
import { Acquaintance } from './Acquaintance/Acquaintance';
import { Settings } from './Settings/Settings';
import { Developers } from './Developers/Developers';
import { Technologies } from './Technologies/Technologies';

export const Main = () => {
    return (
        <BrowserRouter>
            <main className={`${s.main} main_wr`}>
                <Navbar />
                <Route path={'/profile'} component={Profile} />
                <Route path={'/news'} component={News} />
                <Route path={'/acquaintance'} component={Acquaintance} />
                <Route path={'/messages'} component={Messages} />
                <Route path={'/settings'} component={Settings} />
                <Route path={'/developers'} component={Developers} />
                <Route path={'/technologies'} component={Technologies} />
                <Aside />
            </main>
        </BrowserRouter>
    );
};
