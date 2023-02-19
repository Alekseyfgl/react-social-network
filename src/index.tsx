import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {store} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};
renderEntireTree();

store.subscriber(renderEntireTree)