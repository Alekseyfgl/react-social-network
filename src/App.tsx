import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';

interface IAppProps {
    store: any;
    // dispatch: (value: ActionsTypes) => void;

}

const App = (props: IAppProps) => {
    const {store} = props;

    return (

        <div className="App">
            <Header/>
            <Main store={store}
            />
        </div>

    );
};

export default App;
