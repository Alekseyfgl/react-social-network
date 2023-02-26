import {Navbar} from './Navbar/Navbar';
import s from './Main.module.css';
import {Messages} from './Messages/Messages';
import {Route} from 'react-router-dom';
import {News} from './News/News';
import {Acquaintance} from './Acquaintance/Acquaintance';
import {Settings} from './Settings/Settings';
import {Developers} from './Developers/Developers';
import {Technologies} from './Technologies/Technologies';
import {IStore,} from '../../redux/state.interface';
import {FC} from 'react';
import {ProfileContainer} from './Profile/ProfileContainer';

interface IMainProps {
    // userInfo: IUserState
    // friendInfo: IUserState
    // profilePage: IProfilePageState;
    // messagesPage: IMassagePageState;
    // newPostText: string;
    // dispatch: (value: ActionsTypes) => void;
    store: IStore
}

export const Main: FC<IMainProps> = (props) => {
    const {
        store
    } = props;


    const renderHandlerProfile = () => {
        return <ProfileContainer/>;
    };

    const renderHandlerMessages = () => {
        return <Messages store={store}
        />;
    };

    return (
        <main className={`${s.main} main_wr`}>

            <Navbar/>
            <Route path={'/profile'} render={renderHandlerProfile}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/acquaintance'} render={() => <Acquaintance/>}/>
            <Route path={'/messages'} render={renderHandlerMessages}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
            <Route path={'/developers'} render={() => <Developers/>}/>
            {/*component - из-за этого атрибута нельзя передать пропсы внутрь*/}
            <Route path={'/technologies'} component={Technologies}/>

        </main>
    );
};
