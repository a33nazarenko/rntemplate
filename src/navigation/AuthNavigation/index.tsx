import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {InitialScreen} from '../../screens/InitialScreen';
import {SignInScreen} from '../../screens/SignInScreen';
import {SignUpScreen} from '../../screens/SignUpScreen';

export type MainStackParamList = {
  InitialScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
};
const MainStack = createNativeStackNavigator<MainStackParamList>();

const AuthNavigation = () => {
  return (
    <MainStack.Navigator
      initialRouteName="InitialScreen"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="InitialScreen" component={InitialScreen} />
      <MainStack.Screen name="SignInScreen" component={SignInScreen} />
      <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </MainStack.Navigator>
  );
};

export default AuthNavigation;
