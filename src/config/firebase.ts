// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7aH9tiBtK7fMF43NJI9NOeSID8U0iARE',
  authDomain: 'dotogether-79229.firebaseapp.com',
  projectId: 'dotogether-79229',
  storageBucket: 'dotogether-79229.appspot.com',
  messagingSenderId: '17136437890',
  appId: '1:17136437890:web:1ceabc1f17c0b94e11029b',
}

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
