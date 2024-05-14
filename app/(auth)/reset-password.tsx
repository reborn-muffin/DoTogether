import {useState} from 'react'

import {View} from 'react-native'
import FormField from '../../components/FormField'
import {Button, Card, Text} from 'react-native-paper'
import {Link} from 'expo-router'
import {handleResetPassword} from '../../utils/auth'
import {authStyles} from '../../styles/auth'
import {validateEmail} from '../../utils/validation/authValidation'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const changeEmail = async (email: string) => {
    const errorMessage = await validateEmail(email)
    setError(errorMessage)
    setEmail(email)
  }

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
            onPress={() => handleResetPassword(email)}
            disabled={error !== '' || email === ''}
            style={authStyles.actionButton}
            mode={'contained'}
          >
            Reset Password
          </Button>

          <View style={authStyles.actionsView}>
            <Text>Back to</Text>
            <Link href={'/sign-in'} asChild>
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
