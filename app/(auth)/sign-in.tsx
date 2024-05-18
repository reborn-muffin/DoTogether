import {View} from 'react-native'
import {Button, Card, Text} from 'react-native-paper'
import {Link, useRouter} from 'expo-router'
import FormField from '../../src/components/ui/FormField'
import {useState} from 'react'
import {handleSignIn} from '../../src/utils/auth'
import {authStyles} from '../../src/styles/auth'
import {validateEmail} from '../../src/utils/validation/authValidation'
import {ScreenRoutes} from '../../src/consts/routes'
import {useUserStore} from '../../src/store/userStore'

// todo use safeareaview?
const SignIn = () => {
  const router = useRouter()
  const userStore = useUserStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    email: '',
    password: '',
  })

  const signIn = () => {
    handleSignIn(email, password)
    router.push(ScreenRoutes.HOME)
  }

  const changeEmail = async (email: string) => {
    const errorMessage = await validateEmail(email)
    setError({...error, email: errorMessage})
    setEmail(email)
  }

  const changePassword = (password: string) => {
    let errorMessage = ''
    if (password === '') {
      errorMessage = 'Password must not be empty'
      setError({...error, password: errorMessage})
    }
    setPassword(password)
  }

  const isValidationFailed = error.email !== '' || email === '' || password === ''

  return (
    <View style={authStyles.container}>
      <Card style={authStyles.card}>
        <Card.Title titleVariant={'headlineLarge'} title={'Sign In'} />

        <Card.Content style={authStyles.cardContent}>
          <FormField
            handleChange={changeEmail}
            error={error.email}
            placeholder={'Enter email'}
            keyboardType={'email-address'}
          />
          <FormField
            handleChange={changePassword}
            error={error.password}
            placeholder={'Enter password'}
            secureField
          />
        </Card.Content>

        <Card.Actions style={authStyles.cardActions}>
          <Button
            onPress={signIn}
            loading={userStore.isLoading}
            disabled={isValidationFailed || userStore.isLoading}
            style={authStyles.actionButton}
            mode={'contained'}
          >
            Sign In
          </Button>

          <View style={authStyles.actionsView}>
            <Text>Don&apos;t have an account?</Text>
            <Link href={ScreenRoutes.SIGN_UP} asChild>
              <Button compact mode={'text'}>
                Sign Up
              </Button>
            </Link>
          </View>

          <View style={authStyles.actionsView}>
            <Text>Forgot password?</Text>
            <Link href={ScreenRoutes.RESET_PASSWORD} asChild>
              <Button compact mode={'text'}>
                Reset Password
              </Button>
            </Link>
          </View>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default SignIn
