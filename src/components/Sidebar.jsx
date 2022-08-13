
const Slidebar = ({setState}) => {
    // console.log(setState)
    return (
        <div onClick={setState((state) => !state)} className="animate-sidebarIn  w-full h-32 absolute left-0 top-20 bg-orange-500">
                <p>Holis</p>
                {/* Functionalities */}
                {/* Proyects(?) */}
                {/* Employers(?) */}
                {/* App Settings(?) */}
                {/* Account(?) */}
                {/* <div onClick={setState((state) => !state)} className="h-screen overscroll-none absolute w-full">
                </div> */}
        </div>
    )
}

export default Slidebar