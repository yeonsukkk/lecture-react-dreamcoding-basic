import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppMentorsImmer from './AppMentorsImmer';
// import AppMentorsReducer from './AppMentorsReducer';
// import AppMentors from './AppMentors';
// import AppMentor from './AppMentor';
// import AppXY from './AppXY';
// import AppProducnts from './AppProducts';
// import AppCounter from './AppCounter';
// import AppJSX from './AppJSX';
// import AppProfile from './AppProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppMentorsImmer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
