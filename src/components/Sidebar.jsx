import { useEffect } from "react"


const Slidebar = ({handleClick, state}) => {
    
    /* document.onkeydown = function(evt) {
        console.log(evt)
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape && state) {
            alert("Escape");
        }
    }; */

    

    const boton = "block p-3 mt-3 w-1/2 rounded  text-start text-xl bg-[#f2e9e4] hover:bg-[#c9ada7]"

    return (
        <div id="animate" className={` absolute m-0 p-0 left-0 box-border top-0 h-screen w-full overflow-hidden flex`}>
            <div className="w-full h-full absolute backdrop-blur-sm" onClick={handleClick}></div>
            <div className="absolute right-0 w-full top-24 p-0 flex flex-row-reverse">
                <div className="w-full h-full absolute " onClick={handleClick}></div>

                <div  className={`${state? "animate-sidebarIn":""} bg-slate-100 relative right-0 mr-4 ml-4 p-4 pb-10 rounded-md md:w-[400px] w-full h-fit`}>
                    <div className="flex flex-row-reverse">
                        <span onClick={handleClick} className="inline right-0 material-symbols-outlined cursor-pointer">
                        close
                        </span>
                    </div>

                    <button className={boton}>
                        Proyects                            {/* Desplegar las opciones en la sidebar(?) */}
                    </button>
                    <button className={boton}>
                        Account                                {/* move to account component(?) Account component with "edit profile" option */}
                    </button>
                    <button className={boton}>
                        Settings                                 {/* App and account settings */}
                    </button>
                    {/* Functionalities */}
                    {/* Proyects(?) */}
                    {/* Employers(?) */}
                    {/* App Settings(?) */}
                    {/* Account(?) */}
                </div>
            </div>
            
        </div>
    )
}

export default Slidebar