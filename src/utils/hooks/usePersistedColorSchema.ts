import {Appearance} from 'react-native'
import addChangeListener = Appearance.addChangeListener
import getColorScheme = Appearance.getColorScheme
import * as SecureStore from 'expo-secure-store'
import {useState} from 'react'

const usePersistedColorSchema = () => {
  const scheme = SecureStore.getItem('colorScheme')
  const deviceColorTheme = getColorScheme()
  const [colorScheme, setColorScheme] = useState(scheme === '' ? deviceColorTheme : scheme)

  addChangeListener(() => {
    if (scheme === '') {
      setColorScheme(getColorScheme())
    } else {
      setColorScheme(scheme)
    }
  })

  return colorScheme
}

export {usePersistedColorSchema}
