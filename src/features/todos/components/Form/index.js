import { Button, Input, StyledForm } from './styled'

const Form = () => {
  return (
    <StyledForm>
      <Button />
      <Input
        type="text"
        placeholder="Create a new todo..."
      />
    </StyledForm>
  )
}

export default Form;