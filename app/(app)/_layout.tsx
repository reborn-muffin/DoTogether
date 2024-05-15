import {useUserStore} from '../../src/store/userStore'
import {Redirect, Slot} from 'expo-router'
import {ScreenRoutes} from '../../src/consts/routes'

const AppLayout = () => {
  const userId = useUserStore((state) => state.userId)

  if (userId === '') {
    return <Redirect href={ScreenRoutes.SIGN_IN} />
  }

  return <Slot />
}

export default AppLayout
