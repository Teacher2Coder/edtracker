import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

import TeacherEditProfileForm from "./TeacherEditProfileForm";

const TeacherEditProfileModal = () => {
  return (
    <Dialog.Root size='xl'>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="lg">
          Edit Profile
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit your profile</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <TeacherEditProfileForm />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button colorPalette={'blue'} variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default TeacherEditProfileModal;