import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Routes from './routes';

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
      <Footer/>
  </div>,
  document.getElementById('root')
);

