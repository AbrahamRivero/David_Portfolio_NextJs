import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'

const TextInput = ({
	...props
}) => (
	<StyledTextInput
    variant="filled"
    {...props}
  />
)

export default TextInput

const StyledTextInput = styled(TextField)(() => ({
  '&& .MuiFilledInput-root': {
    backgroundColor: 'rgb(14, 190, 223, 0.08)'
  },
  '&& .MuiInputLabel-shrink': {
    fontWeight: 'bold'
  }
}))
