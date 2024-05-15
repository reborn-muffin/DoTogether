import {useUserStore} from '../../store/userStore'
import {Redirect, Slot} from 'expo-router'
import {ScreenRoutes} from '../../consts/routes'

const AppLayout = () => {
  const userId = useUserStore((state) => state.userId)

  if (userId === '') {
    return <Redirect href={ScreenRoutes.SIGN_IN} />
  }

  return <Slot />
}

export default AppLayout
