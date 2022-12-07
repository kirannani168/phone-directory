import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/Common.css';

// import AddSubscriber from './Components/AddSubscriber';
// import ShowSubscriber from './ShowSubscriber';
import reportWebVitals from './reportWebVitals';
import PhoneDirectory from './Components/PhoneDirectory';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneDirectory />
  </React.StrictMode>
);
reportWebVitals();
