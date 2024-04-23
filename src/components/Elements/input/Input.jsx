import { TextField } from "@mui/material"

const Input = (props) => {
  const {id, label,  type } = props
     return (
      <TextField id={id} className="w-full" type={type} label={label}  />
     )
 }
 
 export default Input