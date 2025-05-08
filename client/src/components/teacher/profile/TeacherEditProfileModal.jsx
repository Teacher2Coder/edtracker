import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Field,
  Fieldset,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_TEACHER } from "../../../utils/mutations";

const TeacherEditProfileModal = ({ teacher }) => {
  const [formData, setFormData] = useState({
    teacherName: "",
    teacherEmail: "",
    teacherBio: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const [editTeacher, { error, data }] = useMutation(EDIT_TEACHER);

  useEffect(() => {
    setFormData({
      teacherName: teacher.teacherName,
      teacherEmail: teacher.teacherEmail,
      teacherBio: teacher.teacherBio,
    });
  }, [teacher]);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleEditTeacher = async (event) => {
    event.preventDefault();

    const { teacherName, teacherEmail, teacherBio } = formData;

    // Check for empty fields
    if (teacherName && teacherEmail && teacherBio) {
      try {
        await editTeacher({
          variables: { teacherName, teacherEmail, teacherBio },
        });
      } catch (e) {
        setErrorMessage("An error occurred while updating your profile.");
      } finally {
        window.location.reload();
      }
    } else {
      setErrorMessage("Make sure all fields are filled out.");
    }
  };

  return (
    <Dialog.Root size="xl">
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
              <Fieldset.Root size="lg">
                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Your Name</Field.Label>
                    <Input
                      name="teacherName"
                      value={formData.teacherName}
                      onChange={handleInputChange}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Email address</Field.Label>
                    <Input
                      name="email"
                      type="teacherEmail"
                      value={formData.teacherEmail}
                      onChange={handleInputChange}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Bio</Field.Label>
                    <Textarea
                      name="teacherBio"
                      value={formData.teacherBio}
                      onChange={handleInputChange}
                    />
                  </Field.Root>
                </Fieldset.Content>
              </Fieldset.Root>
            </Dialog.Body>
            <Dialog.Footer>
              <Button
                type="submit"
                alignSelf="flex-start"
                onClick={handleEditTeacher}
              >
                Submit changes
              </Button>
              <Dialog.ActionTrigger asChild>
                <Button colorPalette={"blue"} variant="outline">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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

export default TeacherEditProfileModal;
