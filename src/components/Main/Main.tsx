import {Navbar} from './Navbar/Navbar';
import s from './Main.module.css';
import {Messages} from './Messages/Messages';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './Profile/Profile';
import {News} from './News/News';
import {Acquaintance} from './Acquaintance/Acquaintance';
import {Settings} from './Settings/Settings';
import {Developers} from './Developers/Developers';
import {Technologies} from './Technologies/Technologies';
import {IFriendInfoState, IMassagePageState, IProfilePageState, IUserState,} from '../../redux/state.interface';
import {FC, FormEvent} from 'react';

interface IMainProps {
    userInfo: IUserState
    friendInfo: IFriendInfoState
    profilePage: IProfilePageState;
    messagesPage: IMassagePageState;
    newPostText: string;
    onClickAddPostHandler: (e: FormEvent<HTMLButtonElement>) => void;
    onClickAddMessageHandler: (e: FormEvent<HTMLButtonElement>) => void;
    updateTextPost: (text: string) => void
}

export const Main: FC<IMainProps> = (props) => {
    const {
        userInfo,
        friendInfo,
        profilePage,
        messagesPage,
        onClickAddPostHandler,
        onClickAddMessageHandler,
        updateTextPost
    } = props;


    const renderHandlerProfile = () => {
        return <Profile posts={profilePage.posts}
                        onClickAddPostHandler={onClickAddPostHandler}
                        updateTextPost={updateTextPost}
        />;
    };

    const renderHandlerMessages = () => {
        return <Messages userInfo={userInfo}
                         friendInfo={friendInfo}
                         dialogs={messagesPage.dialogs}
                         onClickAddMessageHandler={onClickAddMessageHandler}/>;
    };

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};
