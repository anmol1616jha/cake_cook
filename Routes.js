import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen, WelcomeScreen } from './src/screens';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const Stack = createStackNavigator();

const Routes = () => {
  /*
1. Create the config
*/
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{ borderColor: 'green' }}
        contentContainerStyle={{ paddingHorizontal: 25 }}
        text1Style={{
          fontSize: 16,
          fontWeight: '600',
        }}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        contentContainerStyle={{ paddingHorizontal: 25 }}
        text1Style={{
          fontSize: 16,
          fontWeight: '600',
        }}
      />
    ),
    warning: props => (
      <BaseToast
        {...props}
        style={{ borderColor: 'yellow' }}
        contentContainerStyle={{ paddingHorizontal: 25 }}
        text1Style={{
          fontSize: 16,
          fontWeight: '600',
        }}
      />
    ),
  };
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Toast config={toastConfig} />
    </>
  );
};

export default Routes;
