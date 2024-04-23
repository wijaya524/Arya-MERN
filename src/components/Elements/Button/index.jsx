import Button from '@mui/material/Button';
const ButtonComponents = (props) => {
   const {name, variant } = props
    return (
      <Button variant={variant}>{name}</Button>
    )
}

export default ButtonComponents