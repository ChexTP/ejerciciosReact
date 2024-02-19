import Tarea from "./Tarea"


const Fondo = () => {
  return (
    <div className="bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] w-[50rem] h-[35rem] flex flex-col rounded-xl items-center justify-start">

        <h1 className="text-5xl font-bold text-slate-800 mt-8">Sena Tareas</h1>

        
        <div className=" h-72 overflow-auto mt-8 rounded-md py-5 px-8 backdrop-blur-md bg-white/30">
            <Tarea/>
            <Tarea/>
            <Tarea/>
            <Tarea/>           
           
        </div>

        <button className="mt-12 bg-slate-800 text-white font-semibold text-2xl w-48 h-14 rounded-md text-center">
          Agregar tarea
        </button>

        

    </div>
  )
}

export default Fondo
