import Sidebar from "./Sidebar"
import { useState } from "react"
import User from "./Main/sub-components/userData"

/* Hover animation that writes Business Manager sliding the words and MB letters */

const Header = () => {
    const [state, setState] = useState(false)
    const [user, setUser] = useState(false)
    
    const handleUser = () => {
        setUser(!user)
    }
    const putUser = () => {
        if (user) {
            return <User handleClick={handleUser} state={user} userInfo="mateopineiroa" />
        }
    }

    const handleClick = () => {
        setState(!state)
    }
    const handleSidebar = () => {
        
        if (state) {
            return (
                <Sidebar handleClick={handleClick} state={state} />
                )
        }
    }
    
    
    return (
        <div className="application w-screen h-20 m-0 p-4 py-5  flex flex-row align-middle justify-between">
            {/* <p className="w-1/2 text-xs sm:text-xl sm:w-1/5 mt-auto mb-auto ml-3 justify-self-start">Business Manager</p> */}
            <img className="h-10 mt-auto mb-auto transparent" src="/MBpng.png" alt="" />
            <div className="w-fit h-fit drop-shadow-xl flex flex-row align-middle">
                <div className="h-10 w-10 mt-auto mb-auto">
                    <img onClick={handleUser} className="rounded-lg cursor-pointer" src="/avatar-1-300x300.png" alt="User image" />
                </div>
                <span onClick={handleClick} className="material-symbols-outlined w-fit p-3 hover:rotate-90 transition-all cursor-pointer">
                    menu
                </span>
            </div>
                    {putUser()}
            {/* {state && <Sidebar handleClick={handleClick} state={state} />}   Tambien se puede asi tho*/}
            {handleSidebar()}
        </div>
    )
}

export default Header