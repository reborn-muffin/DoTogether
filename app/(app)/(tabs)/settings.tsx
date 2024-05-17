import {Text, View, StyleSheet} from 'react-native'
import {Button, RadioButton, useTheme} from 'react-native-paper'
import {FC} from 'react'
import {SegmentedButton} from 'react-native-paper/lib/typescript/components/SegmentedButtons/SegmentedButtonItem'
import SettingsSegment from '../../../src/components/ui/SettingsSegment'
import ThemeSegment from '../../../src/components/ThemeSegment'
import {getAuth} from 'firebase/auth'
import {FirebaseError} from 'firebase/app'
import {auth} from '../../../src/config/firebase'

enum SettingsOptionType {
  RadioButton,
  SegmentedButton,
}

// interface SettingsOption {
//   title: string
//   onPress: () => void
//   type: SettingsOptionType
// }
//
// const SettingsOption: FC<SettingsOption> = ({title, onPress, type}) => {
//   let action
//
//   if (type === SettingsOptionType.RadioButton)
//     action = <RadioButton value={'qwerty'} onPress={onPress} />
//   else if (type === SettingsOptionType.SegmentedButton)
//     action = <ThemeSegment />
//
//
//   return (
//     <View>
//       <Text>SettingsOption</Text>
//       {action}
//     </View>
//   )
// }

const Settings = () => {
  const theme = useTheme()

  const handleSignOut = () => {
    auth
      .signOut()
      .then()
      .catch((error: unknown) => {
        if (error instanceof FirebaseError) {
          alert(error.message)
        }
      })
  }

  return (
    <View style={{...styles.container, backgroundColor: theme.colors.background}}>
      <View>
        <ThemeSegment />
      </View>

      <Button onPress={handleSignOut} mode={'contained'} style={styles.signOutButton}>
        Sign Out
      </Button>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  signOutButton: {
    width: '98%',
    alignSelf: 'center',
    marginTop: 'auto',
  },
})
