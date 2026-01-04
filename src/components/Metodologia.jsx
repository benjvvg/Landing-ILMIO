import { BsCodeSlash, BsGraphUpArrow, BsPencilSquare, BsRocketTakeoff, BsSearch, BsShare } from "react-icons/bs";

function Metodologia() {
    const pasos = [
        { num: "01", titulo: "Diagnóstico", desc: "Proceso, datos, riesgos y arquitectura actual.", icono: <BsSearch /> },
        { num: "02", titulo: "Diseño", desc: "Flujos, seguridad y experiencia de usuario.", icono: <BsPencilSquare />  },
        { num: "03", titulo: "Implementación", desc: "Integración + automatización + agentes IA.", icono: <BsCodeSlash />  },
        { num: "04", titulo: "Go-live", desc: "UAT, entrenamiento y despliegue.", icono: <BsRocketTakeoff />  },
        { num: "05", titulo: "Evolución", desc: "Soporte mensual, mejoras y métricas.", icono: <BsGraphUpArrow />  },
        { num: "06", titulo: "Nodo ILMIO", desc: "Transformación en componente reutilizable.", icono: <BsShare />  },
    ];

    return (
        <section id="como" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-20 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Cómo trabajamos</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Una metodología clara, sin cajas negras, diseñada para la continuidad operativa.
                    </p>
                </div>
                {/* Linea */}
                <div className="absolute left-8 md:left-1/2 top-40 -bottom-10 w-0.5 bg-linear-to-b from-violet-500 via-fuchsia-500 to-transparent -translate-x-1/2 z-0"></div>
                {/* --- LOS PASOS --- */}
                <div className="relative z-10">
                    {pasos.map((paso, index) => (
                        <div key={index} className='relative flex items-center w-full mb-12 md:mb-4'>
                        {/* Nodos */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                            <div className="w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_15px_4px_rgba(139,92,246,0.6)] border-2 border-white"></div>
                        </div>
                        {/* Cards */}
                        <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${
                            index % 2 === 0
                            ? "md:pr-16 md:mr-auto text-left"
                            : "md:pl-16 md:ml-auto text-left"
                        }`}>
                            <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg group">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="text-2xl text-violet-400 group-hover:text-fuchsia-400 transition-colors">
                                        {paso.icono}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{paso.titulo}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {paso.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Metodologia;