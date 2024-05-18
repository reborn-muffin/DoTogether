import {Text} from 'react-native'
import {Button, Dialog, Portal, useTheme} from 'react-native-paper'
import {useModalStore} from '../store/useModalStore'

const CustomDialog = () => {
  const theme = useTheme()
  // todo destruct?
  const modalStore = useModalStore()
  const closeButton = <Button onPress={() => modalStore.setIsShown(false)}>Got it</Button>

  // todo '!' ?
  return (
    <Portal>
      <Dialog visible={modalStore.isShown!}>
        <Dialog.Title>{modalStore.title}</Dialog.Title>
        <Dialog.Content>
          <Text
            selectable
            style={{color: modalStore.isError ? theme.colors.error : theme.colors.onBackground}}
          >
            {modalStore.body}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          {modalStore.actions!.length > 0 ? modalStore.actions : closeButton}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default CustomDialog
