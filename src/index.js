import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Boundary = () => {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(
    <Boundary />,
  document.getElementById('root')
);


