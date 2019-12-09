/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import store from './Redux/Store';
import AppNavigation from './Navigation/AppNavigation';
import styles from './Containers/Style/AppStyle';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Provider>
          <AppNavigation />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
