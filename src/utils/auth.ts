import {createUserWithEmailAndPassword, signInWithEmailAndPassword, User} from 'firebase/auth'
import {auth} from '../config/firebase'
import * as SecureStorage from 'expo-secure-store'
import {useUserStore} from '../store/userStore'
import {useModalStore} from '../store/useModalStore'

const userStore = useUserStore.getState()
const modalStore = useModalStore.getState()

export const handleSignUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => setStoredAuth(userCredential.user))
    .catch((err: Error) => modalStore.setModal({title: 'Error', body: err.message, isError: true}))
}

export const handleSignIn = (email: string, password: string) => {
  userStore.setIsLoading(true)
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => setStoredAuth(userCredential.user))
    .catch((err: Error) => modalStore.setModal({title: 'Error', body: err.message, isError: true}))
    .finally(() => userStore.setIsLoading(false))
}

const setStoredAuth = (user: User) => {
  userStore.setIsSignedIn(true)
  SecureStorage.setItem('auth', JSON.stringify(user))
}

const clearStoredAuth = () => {
  userStore.setIsLoading(true)
  SecureStorage.deleteItemAsync('auth')
    .then(() => userStore.setIsSignedIn(false))
    .catch((err) => modalStore.setModal({title: 'Error', body: err.message, isError: true}))
    .finally(() => userStore.setIsLoading(false))
}

const getStoredAuth = () => {
  const jsonAuth = SecureStorage.getItem('auth')

  if (jsonAuth) {
    const parsedAuth = JSON.parse(jsonAuth)
    userStore.setIsSignedIn(parsedAuth !== null)
    return parsedAuth
  }

  return null
}

export {setStoredAuth, clearStoredAuth, getStoredAuth}
