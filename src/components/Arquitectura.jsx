import { BsCpu, BsShare, BsGlobe } from "react-icons/bs"

function Arquitectura() {
    const capas = [
        {
            id: "interaccion",
            nombre: "Capa de Interacción",
            subtitulo: "Experiencia de Usuario",
            desc: "Interfaces fluidas y omnicanales. Donde tus usuarios conectan con el sistema.",
            icono: <BsGlobe className="text-cyan-400" />,
            color: "border-cyan-500/30 hover:border-cyan-500/60",
            bgGradient: "from-cyan-500/10 to-transparent",
            className: "md:col-span-2 md:w-1/2 md:mx-auto" 
        },
        {
            id: "orquestacion",
            nombre: "Lógica & Orquestación",
            subtitulo: "El Sistema Nervioso",
            desc: "Integración de flujos. Conectamos tus herramientas actuales para automatizar tareas.",
            icono: <BsShare className="text-violet-400" />,
            color: "border-violet-500/30 hover:border-violet-500/60",
            bgGradient: "from-violet-500/10 to-transparent",
            className: "md:col-span-1"
        },
        {
            id: "inteligencia",
            nombre: "Núcleo Cognitivo",
            subtitulo: "Inteligencia Artificial",
            desc: "Modelos de IA que analizan, deciden y generan contenido en tiempo real.",
            icono: <BsCpu className="text-fuchsia-400" />,
            color: "border-fuchsia-500/30 hover:border-fuchsia-500/60",
            bgGradient: "from-fuchsia-500/10 to-transparent",
            className: "md:col-span-1"
        }
    ];

    return (
        <section className="py-24 px-4 relative z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Arquitectura del Sistema</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Diseñamos soluciones por capas desacopladas, lo que permite escalar o cambiar tecnologías sin romper todo el sistema.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capas.map((capa, index) => (
                        <div 
                        key={capa.id}
                        className={`group relative overflow-hidden rounded-3xl border bg-gray-900/40 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${capa.color} ${capa.className}`}
                        >
                            <div className={`absolute inset-0 bg-linear-to-br ${capa.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative z-10 flex flex-col h-full items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gray-900/80 border border-white/10 flex items-center justify-center text-3xl shadow-inner mb-6 group-hover:scale-110 transition-transform duration-300">
                                {capa.icono}
                                </div>
                                <h4 className="text-xs font-bold text-violet-400 mb-2 uppercase tracking-wider">
                                {capa.subtitulo}
                                </h4>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                {capa.nombre}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                {capa.desc}
                                </p>
                                <span className="absolute -right-4 -bottom-8 text-9xl font-bold text-white/3 font-mono select-none pointer-events-none">
                                {index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Arquitectura;