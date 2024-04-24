import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const ButtonComponents = (props) => {
   const {name, variant, } = props
    return (
      <Button  variant={variant}><Link to="">{name}</Link></Button>
    )
}

export default ButtonComponents