import {Redirect} from 'expo-router'
import {ScreenRoutes} from '../src/consts/routes'

// todo
const Page = () => {
  return <Redirect href={ScreenRoutes.SIGN_IN} />
}

export default Page
