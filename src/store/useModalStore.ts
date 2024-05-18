import {create} from 'zustand'
import {ReactElement} from 'react'

interface ModalState {
  title: string
  body: string
  actions?: ReactElement[]
  isShown?: boolean
  isError?: boolean
}

interface ModalActions {
  setModal(modalProps: ModalState): void
  setIsShown(isShown: boolean): void
}

const useModalStore = create<ModalState & ModalActions>()((set) => ({
  title: '',
  body: '',
  isShown: false,
  isError: false,
  actions: [],
  setModal({title, body, actions = [], isShown = true, isError = false}) {
    set({
      title: title,
      body: body,
      isShown: isShown,
      actions: actions,
      isError: isError,
    })
  },
  setIsShown(isShown: boolean) {
    set({isShown})
  },
}))

export {useModalStore}
