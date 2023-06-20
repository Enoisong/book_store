import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytic endpoint. Learn more: https://bit.ly/CRA-vitals
