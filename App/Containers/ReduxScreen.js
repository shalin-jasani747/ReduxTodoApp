import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../Redux';
import Redux from '../Component/Redux';

const store = createStore(rootReducer);

export default ({navigation}) => {
  return (
    <Provider store={store}>
      <Redux navigation={navigation} />
    </Provider>
  );
};
