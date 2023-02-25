import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {store} from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from './store-context/StoreContext';


const renderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store as any}>
                <App
                    store={store}
                />
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
};
renderEntireTree();

store.subscribe(() => {
    renderEntireTree()
})