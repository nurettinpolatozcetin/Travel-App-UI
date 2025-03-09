import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabRoutes from './BottomTabRoutes';
import {Home, Login, Introduce} from '../screens';

const Stack = createNativeStackNavigator();
const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabRoutes} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Introduce" component={Introduce} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
