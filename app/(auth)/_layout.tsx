import {Stack, useRouter} from 'expo-router'
import {useTheme} from 'react-native-paper'
import {ScreenNames, ScreenRoutes} from '../../src/consts/routes'
import {useUserStore} from '../../src/store/userStore'

const AuthLayout = () => {
  const theme = useTheme()
  const router = useRouter()
  const userId = useUserStore((state) => state.userId)

  if (userId !== '') {
    router.navigate(ScreenRoutes.HOME)
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: theme.colors.background,
        statusBarStyle: theme.dark ? 'light' : 'dark',
        navigationBarColor: theme.colors.background,
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
