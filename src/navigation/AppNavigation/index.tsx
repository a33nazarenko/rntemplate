import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../../screens/HomeScreen';
import {InitialScreen} from '../../screens/InitialScreen';
import {SignInScreen} from '../../screens/SignInScreen';
import {SignUpScreen} from '../../screens/SignUpScreen';

export type MainStackParamList = {
  HomeScreen: undefined;
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Initial" component={InitialScreen} />
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SignInStackScreen() {
  return (
    <SettingsStack.Navigator initialRouteName="SignIn">
      <SettingsStack.Screen name="SignIn" component={SignInScreen} />
      <SettingsStack.Screen name="SignUp" component={SignUpScreen} />
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="SignIn"
        component={SignInStackScreen}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
