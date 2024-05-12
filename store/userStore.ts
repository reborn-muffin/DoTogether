// todo export in the end?
import {create} from 'zustand';

type UserState = {
  userId: string,
  email: string,
  accessToken: string,
  error: any,
}

type UserAction = {
  setUserId: (userId: string) => void,
  setEmail: (email: string) => void,
  setAccessToken: (accessToken: string) => void,
  setError: (error: any) => void,
}

export const useUserStore= create<UserState & UserAction>()((set) => ({
  userId: '',
  email: '',
  accessToken: '',
  error: null,
  setUserId: (userId: string) => set({userId}),
  setEmail: (email: string) => set({email}),
  setAccessToken: (accessToken: string) => set({accessToken}),
  setError: (error: string) => set({error}),
}))
