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
                <div className="absolute left-8 md:left-1/2 top-40 -bottom-10 w-0.5 bg-linear-to-b from-violet-500 via-fuchsia-500 to-transparent -translate-x-1/2 z-0"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12">
                    
                    {pasos.map((paso, index) => {
                        const esPar = index % 2 === 0;

                        return (
                            <div key={index} className="relative w-full">
                                <div className="md:hidden absolute w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_15px_4px_rgba(139,92,246,0.6)] border-2 border-white z-20 top-10 left-8 -translate-x-1/2"></div>
                                {esPar && (
                                    <div className="hidden md:block absolute w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_15px_4px_rgba(139,92,246,0.6)] border-2 border-white z-20 top-10 
                                    -right-6 translate-x-1/2"></div>
                                )}
                                <div className="pl-20 md:pl-0 h-full">
                                    <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg group h-full">
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Metodologia;