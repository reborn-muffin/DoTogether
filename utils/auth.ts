import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {auth} from '../config/firebase'
import {useUserStore} from '../store/userStore'

const userStore = useUserStore.getState()

export const handleSignUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userStore.setUserId(userCredential.user.uid)
      userStore.setEmail(userCredential.user.email!) // todo
      userStore.setAccessToken(userCredential.user.refreshToken)
    })
    .catch((error: Error) => {
      alert(error.message)
    })
}

export const handleSignIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userStore.setUserId(userCredential.user.uid)
      userStore.setEmail(userCredential.user.email!) // todo
      userStore.setAccessToken(userCredential.user.refreshToken)
    })
    .catch((error: Error) => {
      userStore.setError(error.message)
      alert(error)
    })
}

export const handleResetPassword = (email: string) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('ok') // todo
    })
    .catch((error: Error) => {
      alert(error.message)
    })
}
