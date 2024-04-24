

const LayoutsDiv = (props) => {
    const { children} = props
    return (
       <div className=" w-full bg-slate-500 items-center justify-center p-2 grid h-screen">
        {children}
       </div>
    )
}

export default LayoutsDiv