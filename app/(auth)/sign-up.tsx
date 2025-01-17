import {View} from 'react-native'
import {Button, Card, Text} from 'react-native-paper'
import {Link, useRouter} from 'expo-router'
import FormField from '../../src/components/ui/FormField'
import {useState} from 'react'
import {handleSignUp} from '../../src/utils/auth'
import {authStyles} from '../../src/styles/auth'
import {validateEmail, validatePassword} from '../../src/utils/validation/authValidation'
import {ScreenRoutes} from '../../src/consts/routes'
import {useUserStore} from '../../src/store/userStore'

// todo use safeareaview?
const SignIn = () => {
  const router = useRouter()
  const userStore = useUserStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [error, setError] = useState({
    email: '',
    password: '',
    cPassword: '',
  })

  const signUp = () => {
    handleSignUp(email, password)
    router.push(ScreenRoutes.HOME)
  }

  const changeEmail = async (email: string) => {
    const errorMessage = await validateEmail(email)
    setError({...error, email: errorMessage})
    setEmail(email)
  }

  const changePassword = async (password: string) => {
    const errorMessage = await validatePassword(password)
    setError({...error, password: errorMessage})
    setPassword(password)
  }

  const changeCPassword = async (cPassword: string) => {
    let errorMessage = ''
    if (password !== cPassword) {
      errorMessage = 'Passwords do not match'
    }
    setError({...error, cPassword: errorMessage})
    setCPassword(password)
  }

  // todo improve with yup?
  const isValidationSuccess =
    error.email === '' &&
    error.cPassword === '' &&
    error.password === '' &&
    email !== '' &&
    password !== '' &&
    cPassword !== ''

  return (
    <View style={authStyles.container}>
      <Card style={authStyles.card}>
        <Card.Title titleVariant={'headlineLarge'} title={'Sign Up'} />

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
          <FormField
            handleChange={changeCPassword}
            error={error.cPassword}
            placeholder={'Confirm password'}
            secureField
          />
        </Card.Content>

        <Card.Actions style={{flexDirection: 'column'}}>
          <Button
            onPress={signUp}
            loading={userStore.isLoading}
            disabled={!isValidationSuccess || userStore.isLoading}
            style={authStyles.actionButton}
            mode={'contained'}
          >
            Sign Up
          </Button>

          <View style={authStyles.actionsView}>
            <Text>Already have an account?</Text>
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

export default SignIn
