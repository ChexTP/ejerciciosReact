import { useState } from "react"


const ModalActulizar = () => {

const [showModalActualizar, setShowModalActualizar] = useState(false);

  return (
    <div>
        <div className="backdrop-blur-md bg-white/30 w-[40rem] h-96">
            <button >
                cerrar
            </button>

        </div>
      
    </div>
  )
}

export default ModalActulizar
