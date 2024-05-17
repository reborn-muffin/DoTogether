import {View, StyleSheet} from 'react-native'
import {Button, useTheme} from 'react-native-paper'
import ThemeSegment from '../../../src/components/ThemeSegment'
import {FirebaseError} from 'firebase/app'
import {auth} from '../../../src/config/firebase'
import {useUserStore} from '../../../src/store/userStore'

const Settings = () => {
  const theme = useTheme()
  const userStore = useUserStore()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        userStore.setUserId('')
      })
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
