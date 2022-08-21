import { useState } from "react"
import Tasks from "./Main/Tasks.jsx"
import Status from "./Main/Status.jsx"

/* Selecciona entre empleados y tareas */
const Slidebar = () => {
    const [slide, setSlide] = useState("Status")
	
    let title = "p-3 text-4xl"
    let main = "mb-3 mx-3 pb-3 w-auto h-fit rounded-lg bg-slate-200"

	const section = (slide) => {
        if (slide == "Status") {
            return (
                    <Status main={main} title={title} />
                )
            } else {
                return (
                    <Tasks main={main} title={title} />
                )
            }
    }
	const handleEventStatus = () => {
		if (slide != "Status") {
			
			setSlide( "Status" )
			let status = document.getElementById("Status")		//Has to be next to the call because useState "restarts" the page
			let tasks = document.getElementById("Tasks")
			tasks.classList.toggle("active")
            status.classList.toggle("active")
        }
    }
    const handleEventTasks = () => {
        if (slide != "Tasks") {
            setSlide( "Tasks" )   
			let status = document.getElementById("Status")
			let tasks = document.getElementById("Tasks")
			tasks.classList.toggle("active")
            status.classList.toggle("active")
        }
    }

    return (
        <div className="w-full lg:w-[80vw] mx-auto">
            <div className=" my-3 mx-3 h-12 rounded-md bg-slate-400 border-spacing-3 flex flex-row align-middle justify-evenly">
                <span
                    id="Status" 
                    className="active my-auto py-1 px-1 w-1/3 text-center text-xs font-bold border rounded-md hover:bg-slate-500 cursor-default"
                    onClick={handleEventStatus}
                    >
                    Status
                </span>
                <span 
                    id="Tasks"
                    className="my-auto py-1 px-1 w-1/3 text-center text-xs font-bold border rounded-md hover:bg-slate-500 cursor-default"
                    onClick={handleEventTasks}
                    >
                    Tasks
                </span>
            </div>
            {/* <div className="w-full h-20 hover:animation-sidebarIn bg-red-600"></div> */}

            {section(slide)}            {/* Forma correcta de hacer un toggle? */}
        </div>
    )
}

export default Slidebar