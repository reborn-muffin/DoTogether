import {Appearance} from 'react-native'
import addChangeListener = Appearance.addChangeListener
import getColorScheme = Appearance.getColorScheme
import * as SecureStore from 'expo-secure-store'
import {useState} from 'react'

const usePersistedColorSchema = () => {
  const scheme = SecureStore.getItem('colorScheme')
  const isDeviceScheme = scheme === '' || scheme === undefined
  const initialScheme = isDeviceScheme ? getColorScheme() : scheme
  const [colorScheme, setColorScheme] = useState(initialScheme)

  addChangeListener(() => {
    if (isDeviceScheme) {
      setColorScheme(getColorScheme())
    } else {
      setColorScheme(scheme)
    }
  })

  return colorScheme
}

export {usePersistedColorSchema}
