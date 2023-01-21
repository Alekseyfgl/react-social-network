import { Navbar } from './Navbar/Navbar';
import s from './Main.module.css';
import { Messages } from './Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import { Profile } from './Profile/Profile';
import { News } from './News/News';
import { Acquaintance } from './Acquaintance/Acquaintance';
import { Settings } from './Settings/Settings';
import { Developers } from './Developers/Developers';
import { Technologies } from './Technologies/Technologies';

export const Main = (props: any) => {
    return (
        <BrowserRouter>
            <main className={`${s.main} main_wr`}>
                <Navbar />

                <Route path={'/profile'} render={() => <Profile posts={props.appState.profilePage.posts} />} />
                <Route path={'/news'} render={() => <News />} />
                <Route path={'/acquaintance'} render={() => <Acquaintance />} />
                <Route path={'/messages'} render={() => <Messages dialogs={props.appState.messagesPage.dialogs} />} />
                <Route path={'/settings'} render={() => <Settings />} />
                <Route path={'/developers'} render={() => <Developers />} />
                {/*component - из-за этого атрибута нельзя передать пропсы внутрь*/}
                <Route path={'/technologies'} component={Technologies} />
            </main>
        </BrowserRouter>
    );
};
