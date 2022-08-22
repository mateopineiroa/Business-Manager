

const Status = ( {props, main, title} ) => {
    // console.log(main)
    const loading = () => {
        return (
                <div class="border mt-3 border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-3">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-slate-700 h-10 w-10"></div>             {/* Img */}
                        <div class="flex-1 space-y-6 py-1">                         
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
    const elements = [                      /* get elements from db */
        {
            imagen:"/avatar-1-300x300.png",         /* User img */
            title:"Title",                              /* Task title */
            description:"Description of the element",              /* Task desc */
            status:"In process",                        /* Task status. In process or pending */
            comments:"Comments"                         /* Comment section */
        },
        {
            imagen:"/avatar-1-300x300.png",         /* User img */
            title:"Title 2",                              /* Task title */
            description:"Description of the element",              /* Task desc */
            status:"Pending",                        /* Task status. In process or pending */
            comments:"Comments"                         /* Comment section */
        },
        {
            imagen:"/avatar-1-300x300.png",         /* User img */
            title:"Title 3",                              /* Task title */
            description:"Description of the element",              /* Task desc */
            status:"Paused",                        /* Task status. In process or pending */
            comments:"Comments"                         /* Comment section */
        }
    ]

    const mapping = elements.map((element) => {
        return (
            <div className="border mt-3 border-blue-300 rounded-md p-4 max-w-sm w-full mx-3 flex flex-column flex-wrap">
                <div className=" flex flex-row w-full">
                    <img className="h-16 w-16" src={element.imagen} alt={element.title} />           
                    <div className="flex mt-2 ml-3 flex-row w-full h-full justify-between ">
                        <div className=" ">
                            <p>{element.title}</p>
                        </div>
                        <div className="flex flex-row  w-fit">
                            <p className="">{element.status}</p>
                            <div className={`rounded-full h-3 w-3 mt-[0.4rem] ml-2 ${element.status=="In process"?"bg-lime-600":element.status=="Pending"?"bg-orange-500":"bg-yellow-400"}`}></div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p>Description: {element.description}</p>
                </div>
            </div>
            
        )
    })

    return (
        <div className={props}>
            <div className={`${main} pb-5`}>
                <h2 className={title}>Status section</h2>
                <div className="flex flex-wrap">
                    {mapping}
                    {loading()}
                </div>
            </div>







        </div>
    )
}

export default Status