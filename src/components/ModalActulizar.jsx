import { useState,useContext } from "react"
import { globalContext } from "../context/globalContext";


const ModalActulizar = () => {

  const {showModalActualizar, setShowModalActualizar} = useContext(globalContext)

  const handleClick=()=>{
    setShowModalActualizar(false)
  }

  return (
    <div>
      {showModalActualizar? (
        <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className=" bg-white w-[30rem] h-60 rounded-md flex flex-col justify-center items-center">
              
              
                <button className="bg-slate-800 h-16 w-12 left-52 top-2 relative rounded-full text-white" 
                onClick={handleClick}
                >
                  cerrar
                </button>
            
              <div className="w-full h-full flex flex-col gap-3 justify-center items-center ">
                <div className="bg-slate-800 rounded-md w-96 h-16  flex items-center px-3">
                  <label htmlFor="tarea">tarea</label>
                  <input type="text" id="tarea"/>
                </div>

                <button className="bg-slate-800 h-9 w-20 text-white ml-2 rounded-md"
                        
                        >
                        Actualizar
                </button>
              </div>
          </div>
        </div>
        ):""
      }
      
    </div>
  )
}

export default ModalActulizar
