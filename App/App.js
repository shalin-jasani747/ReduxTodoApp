/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Redux/';
import RootContainer from './RootContainer';

const store = createStore(rootReducer)

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
