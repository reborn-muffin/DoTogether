import {Appearance, ColorSchemeName, View} from 'react-native'
import SettingsSegment from './ui/SettingsSegment'
import {Text} from 'react-native-paper'
import * as SecureStore from 'expo-secure-store'
import setColorScheme = Appearance.setColorScheme

const ThemeSegment = () => {
  const prevValue = SecureStore.getItem('colorScheme')
  const buttons = [
    {value: 'light', label: 'Light'},
    {value: 'dark', label: 'Dark'},
    {value: '', label: 'System'},
  ]

  const handleValueChange = (value: string) => {
    setColorScheme(value === '' ? (value as ColorSchemeName) : null)
    SecureStore.setItem('colorScheme', value)
  }

  return (
    <View>
      <Text variant={'bodyLarge'}>Theme</Text>
      <SettingsSegment
        prevValue={prevValue ?? ''}
        buttons={buttons}
        onValueChange={handleValueChange}
      />
    </View>
  )
}

export default ThemeSegment
