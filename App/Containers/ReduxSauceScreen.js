import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../ReduxSauce';
import ReduxSauce from '../Component/ReduxSauce';

const store = createStore(rootReducer);

export default ({navigation}) => {
  return (
    <Provider store={store}>
      <ReduxSauce navigation={navigation} />
    </Provider>
  );
};
