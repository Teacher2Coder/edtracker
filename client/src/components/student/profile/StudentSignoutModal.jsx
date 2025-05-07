import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import Auth from "../../../utils/auth";

const StudentSignoutModal = () => {
  const handleSignOut = () => {
    Auth.logout();
  };

  return (
    <Dialog.Root size="xl">
      <Dialog.Trigger asChild>
        <Button variant="outline" size="lg">
          Sign Out
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Student Sign Out</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>Are you sure you want to sign out?</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button colorPalette={"blue"} onClick={handleSignOut}>
                  Sign Out
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button colorPalette={"blue"} variant="outline">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default StudentSignoutModal;
