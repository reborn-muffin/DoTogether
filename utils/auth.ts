import {createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useUserStore} from '../store/userStore';

const userStore = useUserStore.getState()

export const handleSignUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: any) => {
      alert('ok')
    })
    .catch((error: any) => {
      alert(error.message)
    })
}

export const handleSignIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      userStore.setUserId(userCredentials.user.uid)
      userStore.setEmail(userCredentials.user.email!) // todo
      userStore.setAccessToken(userCredentials.user.refreshToken)
    })
    .catch((error: any) => {
      userStore.setError(error.message)
      alert(error)
    })
}

export const handleResetPassword = (email: string) => {
  sendPasswordResetEmail(auth, email)
    .then((response: any) => {
      alert(response)
    })
    .catch((error: any) => {
      alert(error.message)
    })
}
