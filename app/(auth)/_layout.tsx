import {Stack} from 'expo-router'
import {useTheme} from 'react-native-paper'
import {ScreenNames} from '../../consts/routes'

const AuthLayout = () => {
  const theme = useTheme()

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme.colors.background},
      }}
    >
      <Stack.Screen name={ScreenNames.SIGN_IN} />
      <Stack.Screen name={ScreenNames.SIGN_UP} />
      <Stack.Screen name={ScreenNames.RESET_PASSWORD} />
      <Stack.Screen name={ScreenNames.RESET_SUCCESSFUL} />
    </Stack>
  )
}

export default AuthLayout
