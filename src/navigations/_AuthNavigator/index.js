import React from 'react';
import { EasingCardTransition, VScreenOptions } from 'src/navigations/navHelpers';
import { AUTH } from 'src/constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen, LoginScreen, SignupScreen, ResetPasswordScreen } from 'src/screens';

const AuthNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={({ route }) => ({
        ...VScreenOptions,
        ...EasingCardTransition,
      })}
    >
      <Screen name={AUTH.WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
      <Screen name={AUTH.SIGNUP} component={SignupScreen} />
      <Screen name={AUTH.LOGIN} component={LoginScreen} />
      <Screen name={AUTH.RESET} component={ResetPasswordScreen} />
    </Navigator>
  );
};

export default AuthNavigator;
