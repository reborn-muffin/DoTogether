import {Button, Card, Text} from 'react-native-paper'
import {Link} from 'expo-router'
import {View, StyleSheet} from 'react-native'
import {ScreenRoutes} from '../../consts/routes'

const ResetSuccessful = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Title titleVariant={'headlineSmall'} title={'Password reset'} />
        <Card.Content>
          <Text>If you provided a valid email address, the reset link has been sent</Text>
        </Card.Content>
        <Card.Actions>
          <Link href={ScreenRoutes.SIGN_IN} asChild>
            <Button mode={'text'}>Go to Sign In</Button>
          </Link>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default ResetSuccessful

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    paddingVertical: 18,
  },
})
