

/* User component */
const User = ( { state, handleClick, userInfo } ) => {                      // is the user logged?
  /* Is logged in? Redux for user info(?) */

    const userData = () => {
      if (userInfo) {
        return (
          <div>
            <p className=" border-b-2 border-b-slate-300 text-xl pl-2 pb-3 w-[95%] mx-auto">Hello {userInfo}!</p>
            <p className="pt-4 pl-2 text-lg hover:text-slate-500 cursor-default">Profile</p>            {/* Configuration, img, description */}
            <p className="pt-4 pl-2 text-lg hover:text-slate-500 cursor-default">Employees//Company</p>       {/*  depende de user option */}
            <p className="pt-4 pl-2 text-lg hover:text-slate-500 cursor-default">Log Out</p>
          </div>
        )
      } else {
        return (
          <p>Please log in or register</p>
        )
      }
    }
    const animateOut = () => {
      /* useEffect for out animation */
      handleClick()
    }
    let width = window.innerWidth
    


    // const boton = "block p-3 mt-3 w-1/2 rounded  text-start text-xl bg-[#f2e9e4] hover:bg-[#c9ada7]"

    return (
        <div id="animate" className={` absolute m-0 p-0 left-0 box-border top-0 h-screen w-full overflow-hidden flex`}>
            <div className="w-full h-full absolute backdrop-blur-sm" onClick={animateOut}></div>
            <div className="absolute right-0 w-full top-24 p-0 flex flex-row-reverse">
            <div className="w-full h-full absolute " onClick={handleClick}></div>
              <div  className={`${state? "animate-sidebarIn":""} bg-slate-100 relative mr-4 ml-4 p-4 pb-6 rounded-md w-full md:w-[400px] h-fit`}>
                  <div className="flex flex-row-reverse">
                      <span onClick={handleClick} className="inline absolute mr-3 right-0 material-symbols-outlined cursor-pointer">
                      close
                      </span>
                  </div>
              {userData()}
                
              </div>
            </div>
            
        </div>
    )
}


export default User