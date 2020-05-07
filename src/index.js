import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './profile/profile.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Profile  fullName="Mahatma Gandhi" profession="Indian lawyer" bio="Born and raised in a Hindu family in coastal Gujarat, western India, Gandhi was trained in law at the Inner Temple, London, and called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. ">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/330px-Mahatma-Gandhi%2C_studio%2C_1931.jpg" alt="Mahatma Gandhi" />
    </Profile>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
