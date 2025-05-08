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
import { EDIT_STUDENT } from "../../../utils/mutations";

const StudentEditProfileModal = ({ student }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    studentBio: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const [editStudent, { error, data }] = useMutation(EDIT_STUDENT);

  useEffect(() => {
    setFormData({
      studentName: student.studentName,
      studentEmail: student.studentEmail,
      studentBio: student.studentBio,
    });
  }, [student]);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleEditStudent = async (event) => {
    event.preventDefault();

    const { studentName, studentEmail, studentBio } = formData;

    // Check for empty fields
    if (studentName && studentEmail && studentBio) {
      try {
        await editStudent({
          variables: { studentName, studentEmail, studentBio },
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
                    <Input name="studentName" onChange={handleInputChange} />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Email address</Field.Label>
                    <Input
                      name="studentEmail"
                      type="email"
                      onChange={handleInputChange}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Bio</Field.Label>
                    <Textarea name="studentBio" onChange={handleInputChange} />
                  </Field.Root>
                </Fieldset.Content>
              </Fieldset.Root>
            </Dialog.Body>
            <Dialog.Footer>
              <Button type="submit" alignSelf="flex-start" onClick={handleEditStudent}>
                Submit
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

export default StudentEditProfileModal;
