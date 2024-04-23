const Layouts = (props) => {
    const { children, title} = props
    return (
        <div className="w-full max-w-7xl bg-slate-700 m-auto grid justify-center items-center">
            <h1 className="text-center text-lg">{title}</h1>
            {children}
        </div>
    )
}

export default Layouts