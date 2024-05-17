import {useUserStore} from '../../src/store/userStore'
import {Stack, useRouter} from 'expo-router'
import {ScreenNames, ScreenRoutes} from '../../src/consts/routes'
import {useTheme} from 'react-native-paper'

const AppLayout = () => {
  const theme = useTheme()
  const router = useRouter()
  const userStore = useUserStore()

  if (userStore.userId === '') {
    router.navigate(ScreenRoutes.SIGN_IN)
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: theme.colors.background,
        statusBarStyle: theme.dark ? 'light' : 'dark',
        navigationBarColor: theme.colors.background,
        contentStyle: {
          backgroundColor: theme.colors.surface,
        },
      }}
    >
      <Stack.Screen name={ScreenNames.TABS} />
    </Stack>
  )
}

export default AppLayout
