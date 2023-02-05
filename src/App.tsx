import React, {FormEvent} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {IFriendInfoState, IState, IUserState} from './redux/state.interface';

interface IAppProps {
    appState: IState;
    userInfo: IUserState
    friendInfo: IFriendInfoState
    newPostText: string;
    onClickAddPostHandler: (e: FormEvent<HTMLButtonElement>) => void;
    onClickAddMessageHandler: (e: FormEvent<HTMLButtonElement>) => void;
    updateTextPost: (text: string) => void
}

const App = (props: IAppProps) => {
    const {appState, friendInfo, newPostText, userInfo, onClickAddPostHandler, onClickAddMessageHandler, updateTextPost} = props;

    return (
        <div className="App">
            <Header/>
            <Main friendInfo={friendInfo}
                  userInfo={userInfo}
                  profilePage={appState.profilePage}
                  messagesPage={appState.messagesPage}
                  newPostText={newPostText}
                  onClickAddPostHandler={onClickAddPostHandler}
                  onClickAddMessageHandler={onClickAddMessageHandler}
                  updateTextPost={updateTextPost}
            />
        </div>
    );
};

export default App;
