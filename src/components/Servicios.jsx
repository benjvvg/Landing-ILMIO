import { BsFileEarmarkLock, BsWhatsapp, BsRobot, BsHddNetwork, BsTools, BsCloudCheck } from "react-icons/bs";

function Servicios() {
    const listaServicios = [
        {
            id: 1,
            titulo: "Automatización de procesos",
            desc: "Digitalización de flujos operativos y administrativos que hoy dependen de tareas manuales.",
            icono: <BsRobot className="h-8 w-8 text-violet-400" />
        },
        {
            id: 2,
            titulo: "Omnicanalidad",
            desc: "Experiencias conversacionales (WhatsApp/Web) con agentes IA, contexto y derivación humana.",
            icono: <BsWhatsapp className="h-8 w-8 text-green-400" />
        },
        {
            id: 3,
            titulo: "Gestión Documental",
            desc: "Flujos seguros para documentos sensibles con control de estados, evidencia y auditoría.",
            icono: <BsFileEarmarkLock className="w-8 h-8 text-blue-400" />
        },
        {
            id: 4,
            titulo: "Integración Enterprise",
            desc: "Conectamos sistemas legacy y herramientas modernas para que la información fluya.",
            icono: <BsHddNetwork className="w-8 h-8 text-purple-400" />
        },
        {
            id: 5,
            titulo: "Soporte & Evolución",
            desc: "Operación post go-live: SLA, monitoreo, ajustes y mejoras continuas.",
            icono: <BsTools className="w-8 h-8 text-orange-400" />
        },
        {
            id: 6,
            titulo: "Arquitectura Cloud",
            desc: "Buenas prácticas para disponibilidad, seguridad, escalabilidad y control de costos.",
            icono: <BsCloudCheck className="w-8 h-8 text-cyan-400" />
        }
    ];

    return (
        <section id="servicios" className="py-24 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Servicios</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Soluciones pensadas para resolver necesidades reales hoy y construir el ecosistema del mañana.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listaServicios.map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative h-62 rounded-3xl bg-gray-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:-translate-y-10">
                                <div className="text-5xl text-violet-400 mb-6 transition-all duration-500 group-hover:scale-75 group-hover:text-fuchsia-400">
                                {item.icono}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
                                {item.titulo}
                                </h3>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6 text-center translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                {item.desc}
                                </p>
                                <div className="w-12 h-1 bg-violet-500 rounded-full mx-auto mt-6"></div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
        </section>
    );
};

export default Servicios;