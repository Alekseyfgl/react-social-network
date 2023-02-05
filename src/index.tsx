import './index.css';
import {onClickAddMessageHandler, onClickAddPostHandler, state, subscriber, updateTextPost} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';


const renderEntireTree = () => {
    ReactDOM.render(
        <App appState={state}
             userInfo={state.userInfo}
             friendInfo={state.friendInfo}
             newPostText={state.profilePage.posts.newPostText}
             onClickAddPostHandler={onClickAddPostHandler}
             onClickAddMessageHandler={onClickAddMessageHandler}
             updateTextPost={updateTextPost}
        />,
        document.getElementById('root')
    );
};
renderEntireTree();

subscriber(renderEntireTree)