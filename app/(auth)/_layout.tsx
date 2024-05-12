import React from 'react';

import {Stack} from 'expo-router';
import {useTheme} from 'react-native-paper';

const AuthLayout = () => {
  const theme = useTheme()

  return (
    <Stack screenOptions={{headerShown: false, contentStyle: { backgroundColor: theme.colors.background }}}>
      <Stack.Screen name='sign-in' />
      <Stack.Screen name='sign-up' />
      <Stack.Screen name='reset-password' />
    </Stack>
  );
};

export default AuthLayout;
