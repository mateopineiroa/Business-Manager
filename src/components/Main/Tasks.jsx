import Task from './sub-components/Task';
import { useState, useEffect } from 'react';

const Tasks = ({props, main, title}) => {

    /* UseEffect for update tasks from localstorage and mongoose db */



    let arreglo = [{
            title:"Cortar Pasto",
            description:"Cortar el pasto y tirarlo en la basura. Acordarse de quitar ramas antes"
        },
        {
            title:"Cortar pasto denuevo",
            description:"Cortar el pasto y tirarlo en la basura denuevo."
        }
    ] 
    const [taskTitle, setTitle] = useState("")
    const [taskDescription, setDescription] = useState("")
    const [elementos, setElementos] = useState(arreglo)
    let taskStyles = "w-auto h-18 m-3 rounded-lg bg-slate-50 "
    
    // console.log(taskTitle, taskDescription)
    const handleData = (titulo, descripcion) => {
        setTitle(titulo)
        setDescription(descripcion)
        console.log(titulo, descripcion)
        console.log(taskTitle, taskDescription)
        
        setElementos(array => [...array, {
            title:titulo,
            description:titulo
        }])
        console.log(elementos)
    }
    
    useEffect(() => {
        
    },[elementos])

    console.log(elementos)
    let elements = arreglo.map((element, index) => {
            return (
                <Task 
                    title={element.title} 
                    description={element.description} 
                    index={index+1}
                    key={index}                         //Each component has to have a key prop that is not a prop(?)
                    taskStyles={taskStyles} 
                    />
            )
        })
    
    return (
        <div className={props}>
            <div className={main}>        {/* props==="active"?"hidden":"block" */}
                <h2 className={title}>Tasks remaining...</h2>
                <Task prop="nuevaTask" taskStyles={taskStyles} handleData={handleData} />
                {elements?elements:""}
            </div>

        </div>
    )
}

export default Tasks