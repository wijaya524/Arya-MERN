const Button = (props) => {
   const {children, variant } = props
    return (
     <button className={`btn ${variant}`}>
        {children} 
     </button>
    )
}

export default Button