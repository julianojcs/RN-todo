import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Registration, Update, Show} from './pages';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Task List" component={Home}/>
        <Stack.Screen name="New Task" component={Registration}/>
        <Stack.Screen name="Edit Task" component={Update}/>
        <Stack.Screen name="Show Task" component={Show}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
