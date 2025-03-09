import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {Icons} from '../assets';
import {Home, Login} from '../screens';
import {DefaultTheme} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function BottomTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icons.home}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Time"
        component={Login}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icons.clock}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icons.heart}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icons.profile}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabRoutes;
