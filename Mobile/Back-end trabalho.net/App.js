import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeActivity from './screens/HomeScreen';
import ProductActivity from './screens/ProductScreen';
import ShowActivity from './screens/ShowScreen';

const RootStack = createStackNavigator(
  {
    Home: {screen: HomeActivity},
    Product: {screen: ProductActivity},
    Show: {screen: ShowActivity},
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(RootStack);

export default App;
