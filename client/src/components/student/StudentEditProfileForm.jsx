import {
  Button,
  Field,
  Fieldset,
  Input,
  Textarea
} from "@chakra-ui/react"

const StudentEditProfileForm = () => {
  return (
    <Fieldset.Root size="lg">

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Your Name</Field.Label>
          <Input name="name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input name="email" type="email" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Bio</Field.Label>
          <Textarea name="email" type="email" />
        </Field.Root>

        
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
  )
}

export default StudentEditProfileForm;