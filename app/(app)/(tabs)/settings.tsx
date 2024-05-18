import {View, StyleSheet} from 'react-native'
import {Button, useTheme} from 'react-native-paper'
import ThemeSegment from '../../../src/components/ThemeSegment'
import {FirebaseError} from 'firebase/app'
import {auth} from '../../../src/config/firebase'
import {clearStoredAuth} from '../../../src/utils/auth'
import {useUserStore} from '../../../src/store/userStore'
import {useModalStore} from '../../../src/store/useModalStore'

const Settings = () => {
  const theme = useTheme()
  const userStore = useUserStore()
  const modalStore = useModalStore()

  const handleSignOut = () => {
    userStore.setIsLoading(true)
    auth
      .signOut()
      .then(() => clearStoredAuth())
      .catch((err: unknown) => {
        if (err instanceof FirebaseError) {
          modalStore.setModal({title: 'Error', body: err.message, isError: true})
        }
      })
      .finally(() => userStore.setIsLoading(false))
  }

  return (
    <View style={{...styles.container, backgroundColor: theme.colors.background}}>
      <View>
        <ThemeSegment />
      </View>

      <Button
        onPress={handleSignOut}
        loading={userStore.isLoading}
        disabled={userStore.isLoading}
        mode={'contained'}
        style={styles.signOutButton}
      >
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
