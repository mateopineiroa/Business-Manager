

const AddTask = ({handleData}) => {

    const handleForm = () => {
        let title = document.getElementById("Title")
        let description = document.getElementById("Description")
        handleData(title.value, description.value)
    }
    return (
        <div>

            <form >
                <input autoFocus className="rounded p-1 m-1" placeholder="Title" type="text" id="Title" />
                <textarea  rows="10" name="" className="rounded p-1 m-1 w-full h-full" placeholder="Description" type="text" id="Description" />
            </form>
                <button onClick={handleForm} className="block p-1 m-1 bg-slate-400 rounded px-3" >Enviar</button>
        </div>
    )
}

export default AddTask