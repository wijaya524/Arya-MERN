const Layouts = (props) => {
    const { children, title} = props
    return (
        <div className="w-full max-w-xs flex justify-center items-center">
            {children}
        </div>
    )
}

export default Layouts