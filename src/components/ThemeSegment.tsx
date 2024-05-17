import {Appearance, ColorSchemeName, View} from 'react-native'
import SettingsSegment from './ui/SettingsSegment'
import setColorScheme = Appearance.setColorScheme
import {Text} from 'react-native-paper'
import * as SecureStore from 'expo-secure-store'

export type ColorScheme = 'light' | 'dark' | ''

const ThemeSegment = () => {
  const prevValue = SecureStore.getItem('colorScheme')
  const buttons = [
    {value: 'light', label: 'Light'},
    {value: 'dark', label: 'Dark'},
    {value: '', label: 'System'},
  ]

  const handleValueChange = (value: string) => {
    const colorScheme: null | string = value === '' ? null : value
    setColorScheme(colorScheme)
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
