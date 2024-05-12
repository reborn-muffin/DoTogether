import {View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper'
import {Link, useRouter} from 'expo-router';
import FormField from '../../components/FormField';
import {useState} from 'react';
import {handleSignIn} from '../../utils/auth';
import {authStyles} from '../../styles/auth';
import {validateEmail} from '../../utils/validation/authValidation';

// todo use safeareaview?
const SignIn = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    email: '',
    password: '',
  })

  const signIn = () => {
    handleSignIn(email, password)
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

  const isValidationFailed = error.email !== ''
    || email === ''
    || password === ''

  return (
    <View style={authStyles.container}>
      <Card style={authStyles.card}>
        <Card.Title titleVariant={'headlineLarge'} title={'Sign In'} />

        <Card.Content style={authStyles.cardContent}>
          <FormField handleChange={changeEmail} error={error.email} placeholder={'Enter email'} keyboardType={'email-address'} />
          <FormField handleChange={changePassword} error={error.password} placeholder={'Enter password'} secureField />
        </Card.Content>

        <Card.Actions style={authStyles.cardActions}>
          <Button onPress={signIn} style={authStyles.actionButton} mode={'contained'} disabled={isValidationFailed}>
            Sign In
          </Button>

          <View style={authStyles.actionsView}>
            <Text>Don't have an account?</Text>
            <Link href={'/sign-up'} asChild>
              <Button compact mode={'text'}>Sign Up</Button>
            </Link>
          </View>

          <View style={authStyles.actionsView}>
            <Text>Forgot password?</Text>
            <Link href={'/reset-password'} asChild>
              <Button compact mode={'text'}>Reset Password</Button>
            </Link>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default SignIn;
