import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Login, Register} from './pages/Acess';

function Index() {
  if (window.sessionStorage.getItem('user_id')) {
    return <App />;
  } else {
    return <Login />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
