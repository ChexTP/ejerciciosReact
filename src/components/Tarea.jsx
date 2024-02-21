
import { useState,useContext } from "react"
import { globalContext } from "../context/globalContext"

const Tarea = () => {

  const {showModalActualizar, setShowModalActualizar} = useContext(globalContext)
  const {showModalEliminar, setShowModalEliminar} = useContext(globalContext)
  const {showModalAgregar, setShowModalAgregar} = useContext(globalContext)
  const {tarea, setTarea} = useContext(globalContext)

  const handleClickModalActualizar=()=>{
    setShowModalActualizar(true)
  }


  return (
    <div className="flex items-center justify-center  mt-5">
        <div className="  rounded-md w-96 h-9 mr-10 flex items-start px-3 ">
            <label htmlFor="texto" className="font-semibold text-lg ">
              Tarea</label>
            <input type="text" id="texto" className="w-full h-full rounded-md ml-4"/>
              
            
        </div>
        <button className="bg-slate-800 h-9 w-16 text-white ml-2    rounded-md"
                onClick={handleClickModalActualizar}
        >
            Editar
        </button>
        <button className="bg-slate-800 h-9 w-16 text-white ml-2 rounded-md">
            Eliminar
        </button>


        
      
    </div>
  )
}

export default Tarea
