import { TextField } from "@mui/material"

const Input = (props) => {
  const {id, label,  type,  } = props
     return (
      <TextField fullWidth id={id}  autoComplete="off" InputLabelProps={{style: {color: 'white'}}}  inputProps={{ style: {color: 'white', width: '250px' },maxLength: 8}}  type={type} label={label}  />
     )
 }
 
 export default Input