import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogs = [
    { id: 1, user: 'Alex' },
    { id: 2, user: 'Dima' },
    { id: 3, user: 'Adam' },
];

ReactDOM.render(<App />, document.getElementById('root'));
