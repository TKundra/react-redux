import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import AppOne from './componentOne/AppOne';
import AppTwo from './componentTwo/AppTwo';

// both AppOne and AppTwo referring same store, different is just in methods of calling 
// AppOne with connect and AppTwo with hooks
ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <AppOne />
        <AppTwo />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
