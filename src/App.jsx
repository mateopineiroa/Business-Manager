import './App.css'
import Header from "./components/Header"
import Slidebar from "./components/Slidebar"

function App() {
  
  /* First-time user guide. Not show again button and control with local-storage */
  /* The app will have a default version for first look and a log in for modifying functionalities. */
  /*It will have a mongoose and node backend for managing the tasks and employees of a user. */



  return (
    <div className="m-0 p-0 h-screen">
      <Header />
      <Slidebar />
    </div>
  )
}

export default App
