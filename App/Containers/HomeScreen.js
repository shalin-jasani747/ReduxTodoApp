import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './Style/HomeScreenStyle';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Using Redux</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Using ReduxSauce</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
});

export default connect(null, mapDispatchToProps)(HomeScreen);
