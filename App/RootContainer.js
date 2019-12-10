import React, { Component } from 'react';
import {connect } from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './Navigation/AppNavigation';

class RootContainer extends Component {
  render() {
    return (
        <AppNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect()(RootContainer);
