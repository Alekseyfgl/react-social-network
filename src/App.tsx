import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {ActionsTypes, IState} from './redux/state.interface';

interface IAppProps {
    appState: IState;
    dispatch: (value: ActionsTypes) => void;

}

const App = (props: IAppProps) => {
    const {appState, dispatch} = props;

    return (

        <div className="App">
            <Header/>
            <Main friendInfo={appState.friendInfo}
                  userInfo={appState.userInfo}
                  profilePage={appState.profilePage}
                  messagesPage={appState.messagesPage}
                  newPostText={appState.profilePage.posts.newPostText}
                  dispatch={dispatch}
            />
        </div>

    );
};

export default App;
