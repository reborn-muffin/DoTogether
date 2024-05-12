import {useUserStore} from '../../store/userStore';
import {Redirect, Slot} from 'expo-router';

const AppLayout = () => {
  const userId = useUserStore((state) => state.userId)

  if (userId === '') {
    return <Redirect href={'/sign-in'} />
  }

  return <Slot />;
};

export default AppLayout;
