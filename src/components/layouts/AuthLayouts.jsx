

const LayoutsDiv = (props) => {
    const { children} = props
    return (
       <div className=" w-full  items-center justify-center grid h-screen">
        {children}
       </div>
    )
}

export default LayoutsDiv