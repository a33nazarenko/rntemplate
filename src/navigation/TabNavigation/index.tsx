import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {InitialScreen} from '../../screens/InitialScreen';
import {SignInScreen} from '../../screens/SignInScreen';
import {SignUpScreen} from '../../screens/SignUpScreen';
import {HomeScreen} from '../../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Initial" component={InitialScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SignInStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SignIn" component={SignInScreen} />
      <SettingsStack.Screen name="SignUp" component={SignUpScreen} />
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="SignIn" component={SignInStackScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
