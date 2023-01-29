import ReactDOM from 'react-dom';
import App from './App';
import { onClickAddMessageHandler, onClickAddPostHandler } from './redux/state';
import React from 'react';

export const renderEntireTree = (state: any) => {
    ReactDOM.render(<App appState={state} onClickAddPostHandler={onClickAddPostHandler} onClickAddMessageHandler={onClickAddMessageHandler} />, document.getElementById('root'));
};
