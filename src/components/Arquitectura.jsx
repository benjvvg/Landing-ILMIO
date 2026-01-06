import { BsCpu, BsPuzzle, BsGearWideConnected } from "react-icons/bs"

function Arquitectura() {
    const capas = [
        {
            id: "integración",
            nombre: "Integración",
            desc: "Conectamos lo que ya tienes: plataformas, datos, identidades y servicios cloud.",
            icono: <BsPuzzle className="text-cyan-400" />,
            color: "border-cyan-500/30 hover:border-cyan-500/60",
            bgGradient: "from-cyan-500/10 to-transparent",
            className: "md:col-span-2 md:w-1/2 md:mx-auto" 
        },
        {
            id: "automatización",
            nombre: "Automatización",
            desc: "Eliminamos fricción operativa con flujos trazables y seguros.",
            icono: <BsGearWideConnected className="text-violet-400" />,
            color: "border-violet-500/30 hover:border-violet-500/60",
            bgGradient: "from-violet-500/10 to-transparent",
            className: "md:col-span-1"
        },
        {
            id: "inteligencia",
            nombre: "Capa Neuronal",
            desc: "Agentes de IA que entienden contexto, guían decisiones y ejecutan bajo reglas.",
            icono: <BsCpu className="text-fuchsia-400" />,
            color: "border-fuchsia-500/30 hover:border-fuchsia-500/60",
            bgGradient: "from-fuchsia-500/10 to-transparent",
            className: "md:col-span-1"
        }
    ];

    return (
        <section id="evolución" className="py-24 px-4 relative z-10 overflow-hidden bg-gray-900">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Capas de Evolución</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Una arquitectura modular: resolviendo hoy y expandiendo hacia el ecosistema neuronal.
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