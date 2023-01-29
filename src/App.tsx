import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

const App = (props: any) => {
    return (
        <div className="App">
            <Header />
            <Main appState={props.appState} onClickAddPostHandler={props.onClickAddPostHandler} onClickAddMessageHandler={props.onClickAddMessageHandler} />
        </div>
    );
};

export default App;
