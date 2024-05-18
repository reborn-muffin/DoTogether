import {useState} from 'react'

import {View} from 'react-native'
import FormField from '../../src/components/ui/FormField'
import {Button, Card, Text} from 'react-native-paper'
import {Link, useRouter} from 'expo-router'
import {authStyles} from '../../src/styles/auth'
import {validateEmail} from '../../src/utils/validation/authValidation'
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../../src/config/firebase'
import {FirebaseError} from 'firebase/app'
import {ScreenRoutes} from '../../src/consts/routes'
import {useUserStore} from '../../src/store/userStore'
import {useModalStore} from '../../src/store/useModalStore'

const ResetPassword = () => {
  const router = useRouter()
  const userStore = useUserStore()
  const modalStore = useModalStore()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const changeEmail = async (email: string) => {
    const errorMessage = await validateEmail(email)
    setError(errorMessage)
    setEmail(email)
  }

  const resetPassword = async () => {
    try {
      userStore.setIsLoading(true)
      await sendPasswordResetEmail(auth, email)
      router.navigate(ScreenRoutes.RESET_SUCCESSFUL)
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        modalStore.setModal({title: 'Error', body: err.message, isError: true})
      }
    } finally {
      userStore.setIsLoading(false)
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
            loading={userStore.isLoading}
            disabled={error !== '' || email === '' || userStore.isLoading}
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
    </View>
  )
}

export default ResetPassword
