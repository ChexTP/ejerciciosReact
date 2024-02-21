import {globalContext} from "./globalContext";
import { Children, useState } from "react";


const Contexto = ({children}) => {
    
    const [showModalActualizar, setShowModalActualizar] = useState(false)
    const [showModalAgregar, setShowModalAgregar] = useState(false)
    const [showModalEliminar, setShowModalEliminar] = useState(false)
    const [actualizar, setActualizar] = useState(false)
    const [borrar, setBorrar] = useState(false)
    const [tarea, setTarea] = useState("")



    return (
        <globalContext.Provider
            value={{showModalActualizar, setShowModalActualizar,showModalAgregar, setShowModalAgregar,showModalEliminar, setShowModalEliminar,actualizar, setActualizar,borrar, setBorrar,tarea, setTarea}}>
                {children}
        </globalContext.Provider>
        
        
        
    )
}

export default Contexto