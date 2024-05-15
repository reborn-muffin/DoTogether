import {Appearance} from 'react-native'
import {useFonts} from 'expo-font'
import {Stack} from 'expo-router'
import {Inter_400Regular} from '@expo-google-fonts/inter'
import {SafeAreaView} from 'react-native-safe-area-context'
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper'
import getColorScheme = Appearance.getColorScheme
import {ScreenNames} from '../consts/routes'

const RootLayout = () => {
  const colorScheme = getColorScheme()

  const lightTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
      ...MD3LightTheme.colors,
      background: '#f3f0f0',
      primary: '#ffb343',
      onPrimary: '#fff',
      secondary: '#6cb2eb',
      surfaceVariant: '#f6ede7',
      onSurfaceVariant: '#b7a48c',
      elevation: {
        ...MD3LightTheme.colors.elevation,
        level1: '#fcf8f4',
        level3: '#fcf8f4',
        error: '#fff3f3',
      },
      backdrop: 'rgba(212,200,191,0.39)',
    },
  }

  const darkTheme = {
    ...MD3DarkTheme,
    roundness: 2,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#ef8036',
      onPrimary: '#fff',
    },
  }
  const isLight = colorScheme === 'light'

  const paperTheme = isLight
    ? {...lightTheme, colors: lightTheme.colors}
    : {...darkTheme, colors: darkTheme.colors}
  const [fontsLoaded, fontError] = useFonts({Inter: Inter_400Regular})

  if (!fontsLoaded && !fontError) {
    return null
  }

  const statusBarColor = paperTheme.colors.background
  const statusBarStyle = isLight ? 'dark' : 'light'

  // todo is here needed index screen?
  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaView style={{flex: 1}}>
        <Stack
          screenOptions={{
            headerShown: false,
            statusBarColor: statusBarColor,
            statusBarStyle: statusBarStyle,
            navigationBarColor: paperTheme.colors.background,
            contentStyle: {
              backgroundColor: paperTheme.colors.surface,
            },
          }}
        >
          <Stack.Screen name={ScreenNames.INDEX} />
          <Stack.Screen name={ScreenNames.AUTH_GROUP} />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  )
}

export default RootLayout
