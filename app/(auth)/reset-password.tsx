import {useState} from 'react'

import {View} from 'react-native'
import FormField from '../../src/components/ui/FormField'
import {Button, Card, Dialog, Portal, Text, useTheme} from 'react-native-paper'
import {Link, useRouter} from 'expo-router'
import {authStyles} from '../../src/styles/auth'
import {validateEmail} from '../../src/utils/validation/authValidation'
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../../src/config/firebase'
import {FirebaseError} from 'firebase/app'
import {ScreenRoutes} from '../../src/consts/routes'

const ResetPassword = () => {
  const router = useRouter()
  const theme = useTheme()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isModalShow, setIsModalShow] = useState(false)
  const [resettingError, setResettingError] = useState('')

  const changeEmail = async (email: string) => {
    const errorMessage = await validateEmail(email)
    setError(errorMessage)
    setEmail(email)
  }

  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email)
      router.navigate(ScreenRoutes.RESET_SUCCESSFUL)
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        setResettingError(err.message)
        setIsModalShow(true)
      }
    }
  }

  // todo reset or resseting?
  return (
    <View style={authStyles.container}>
      <Card style={authStyles.card}>
        <Card.Title titleVariant={'headlineLarge'} title={'Reset Password'} />

        <Card.Content>
          <FormField
            handleChange={changeEmail}
            error={error}
            placeholder={'Enter email'}
            keyboardType={'email-address'}
          />
        </Card.Content>

        <Card.Actions style={authStyles.cardActions}>
          <Button
            onPress={resetPassword}
            disabled={error !== '' || email === ''}
            style={authStyles.actionButton}
            mode={'contained'}
          >
            Reset Password
          </Button>

          <View style={authStyles.actionsView}>
            <Text>Back to</Text>
            <Link href={ScreenRoutes.SIGN_IN} asChild>
              <Button compact mode={'text'}>
                Sign In
              </Button>
            </Link>
          </View>
        </Card.Actions>
      </Card>

      <Portal>
        <Dialog visible={isModalShow}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Text selectable style={{color: theme.colors.error}}>
              {resettingError}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsModalShow(false)}>Got it</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )
}

export default ResetPassword
