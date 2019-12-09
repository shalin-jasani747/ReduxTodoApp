import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../Containers/HomeScreen';
// import TodosScreen from '../Containers/TodosScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
