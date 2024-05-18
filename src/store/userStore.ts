// todo export in the end?
import {create} from 'zustand'

interface UserState {
  isSignedIn: boolean
  isLoading: boolean
}

interface UserActions {
  setIsSignedIn: (isSignedIn: boolean) => void
  setIsLoading: (isSignedIn: boolean) => void
}

export const useUserStore = create<UserState & UserActions>((set) => ({
  isSignedIn: false,
  isLoading: false,
  setIsSignedIn: (isSignedIn: boolean) => set({isSignedIn}),
  setIsLoading: (isLoading: boolean) => set({isLoading}),
}))
