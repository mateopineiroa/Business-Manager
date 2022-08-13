import Task from './sub-components/Task';

const Tasks = ({props, main, title}) => {
    console.log(props)
    let taskStyles = "w-auto h-18 m-3 rounded-lg bg-slate-50 "
    let arreglo = [{
        title:"Cortar Pasto",
        description:"Cortar el pasto y tirarlo en la basura. Acordarse de quitar ramas antes"
    },
    {
        title:"Cortar pasto denuevo",
        description:"Cortar el pasto y tirarlo en la basura denuevo. Simplemente para dejar claro que soy tu jefe"
    }
    ]
    

    let elements = arreglo.map((element, index) => {
            return (
                <Task 
                    title={element.title} 
                    description={element.description} 
                    index={index+1} 
                    taskStyles={taskStyles} />
            )
        })
    
    return (
        <div className={props}>
            <div className={main}>        {/* props==="active"?"hidden":"block" */}
                <h2 className={title}>Tasks remaining...</h2>
                <Task prop="nuevaTask" taskStyles={taskStyles} />
                {elements}
            </div>

        </div>
    )
}

export default Tasks