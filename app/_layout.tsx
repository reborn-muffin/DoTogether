import {useColorScheme} from 'react-native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import {Inter_400Regular} from '@expo-google-fonts/inter';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';

const RootLayout = () => {
  const colorScheme = useColorScheme()

  const lightTheme = {
    ...MD3LightTheme,
    roundness: 2,
  }

  const darkTheme = {
    ...MD3DarkTheme,
    roundness: 2,
  }

  const paperTheme = colorScheme === 'dark'
    ? {...darkTheme, colors: darkTheme.colors}
    : {...lightTheme, colors: lightTheme.colors}
  let [fontsLoaded, fontError] = useFonts({'Inter': Inter_400Regular})

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaView style={{flex: 1}}>
        <Stack>
          <Stack.Screen name={'index'} options={{headerShown: false}} />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default RootLayout;
