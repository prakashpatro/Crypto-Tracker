import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cryptcontext from './Cryptcontext';
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <React.StrictMode>
    <Cryptcontext>
    <App />
    </Cryptcontext>
  </React.StrictMode>,
  document.getElementById('root')
);

