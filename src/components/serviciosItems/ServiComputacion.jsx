import { useState } from "react";
import "animate.css"

// export function ButtonListServicios() {
export const ServiComputacion = () => {

    const [ visible, setVisible ] = useState(false)

    return (
        <div className="flex flex-col border items-center">
            <button onClick={() => setVisible(!visible)} className="flex justify-center items-center bg-black/10 transition rounded-md hover:cursor-pointer hover:opacity-80 focus:scale-[1.02] focus:animate-pulse">
                <h2 className="text-xl py-2 px-4 ">Instalación de equipo tecnológico y Soporte Computacional de Informática y Redes</h2>
                <div className="flex place-content-center px-4">
                    <img src="/src/assets/arrow-down.svg" alt="logo svg de flecha direción abajo" className="h-10 w-10 font-semibold"/>
                </div>
            </button>
            {visible && (
                <ul className="w-full list-disc pt-10 px-10 animate__animated animate__fadeIn animate__delay-1s h-screen duration-100 p-4 bg-white/10">
                    <li className="">Instalación de equipo computacional acorde a la necesidad.
                        <ul className="ml-6 list-disc">
                            <li className="text-sm">Formateo de computadores, software ofimática y configuración inicial</li>
                            <li className="text-sm">Instalación de Impresoras</li>
                            <li className="text-sm">Instalación impresora térmica y lector de código</li>
                        </ul>
                    </li>
                    <li className="list-disc">Planificación e Instalación de equipos de red de empresa.
                        <ul className="list-disc ml-6">
                            <li className="text-sm">Proyección de Plano de Red</li>
                            <li className="text-sm"></li>
                            <li className="text-sm"></li>
                        </ul>
                    </li>
                    <li className="list-disc"></li>
                </ul>
            )}
        </div>
    )
}
//FALTA SEGUIR CON ANIMATE.CSS