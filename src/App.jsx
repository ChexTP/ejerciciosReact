import { useContext } from "react"
import Fondo from "./components/Fondo"
import ModalActulizar from "./components/ModalActulizar"
import Contexto from "./context/Contexto"
import { globalContext } from "./context/globalContext"



function App() {
  const {showModalActualizar} = useContext(globalContext)
 
  return (

    <>
      
        <div className="flex items-center justify-center h-screen bg-slate-800">
          {showModalActualizar? <ModalActulizar/> : ''}
          <Fondo/>
        </div>
      
    </>
      
      
    
  )
}

export default App
