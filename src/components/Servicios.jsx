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
            titulo: "Canales Inteligentes",
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
                    <h2 className="text-3xl  md:text-5xl font-bold text-white mb-4">Servicios</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Soluciones pensadas para resolver necesidades reales hoy y construir el ecosistema del mañana.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listaServicios.map((item) => (
                        <div key={item.id} className="bg-gray-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/5 transition-all hover:border-violet-500/30 group">
                            <div className="mb-4 bg-gray-800/50 w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                {item.icono}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.titulo}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Servicios;