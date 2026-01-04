import { BsCpu, BsHddStack, BsShare, BsGlobe, BsLightningCharge } from "react-icons/bs"

function Arquitectura() {
    const capas = [
        {
            id: "interaccion",
            nombre: "Capa de Interacción",
            desc: "Donde el usuario conecta con el sistema.",
            tools: ["WhatsApp Business", "Web React", "Apps Móviles"],
            icono: <BsGlobe className="text-cyan-400" />,
            color: "from-cyan-500/20 to-blue-500/5",
            borde: "border-cyan-500/30"
        },
        {
            id: "orquestacion",
            nombre: "Orquestación & Lógica",
            desc: "El sistema nervioso que mueve los datos.",
            tools: ["n8n / Make", "Python", "FastAPI"],
            icono: <BsShare className="text-violet-400" />,
            color: "from-violet-500/20 to-fuchsia-500/5",
            borde: "border-violet-500/30"
        },
        {
            id: "inteligencia",
            nombre: "Núcleo de Inteligencia",
            desc: "Modelos cognitivos para toma de decisiones.",
            tools: ["OpenAI GPT-4", "Anthropic Claude", "Vectores"],
            icono: <BsCpu className="text-fuchsia-400" />,
            color: "from-fuchsia-500/20 to-pink-500/5",
            borde: "border-fuchsia-500/30"
        },
        {
            id: "datos",
            nombre: "Infraestructura & Datos",
            desc: "Persistencia segura y escalable.",
            tools: ["AWS / Azure", "PostgreSQL", "Redis"],
            icono: <BsHddStack className="text-emerald-400" />,
            color: "from-emerald-500/20 to-green-500/5",
            borde: "border-emerald-500/30"
        }
    ];

    return (
        <section className="py-24 px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 mb-4">
                        <BsLightningCharge className="text-yellow-400" />
                        <span className="text-violet-200 text-xs font-bold uppercase tracking-wider">El Motor</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Arquitectura en capas</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Resolviendo hoy y expandiendo hacia el ecosistema neuronal de IA
                    </p>
                </div>

                <div className="flex flex-col gap-4 relative">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-violet-500/50 to-transparent -translate-x-1/2 z-0 hidden md:block"></div>
                        {capas.map((capa, index) => (
                            <div
                                key={capa.id}
                                className={`relative z-10 group`}
                            >
                                <div className={`
                                    relative overflow-hidden
                                    bg-linear-to-r ${capa.color} backdrop-blur-md
                                    border ${capa.borde} rounded-2xl p-6 md:p-8
                                    hover:scale-[1.02] transition-all duration-500
                                    shadow-lg hover:shadow-${capa.borde.split('-')[1]}-500/20
                                `}>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                                        <div className="flex items-center gap-4 min-w-50">
                                            <div className="p-3 rounded-lg bg-gray-900/50 border border-white/10 text-2xl">
                                                {capa.icono}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{capa.nombre}</h3>
                                                <span className="text-xs text-gray-400 uppercase tracking-widest">Capa 0{index + 1}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 border-l border-white/5 pl-0 md:pl-6 text-gray-300 text-sm leading-relaxed">
                                            {capa.desc}
                                        </div>
                                        <div className="flex flex-wrap gap-2 justify-start md:justify-end max-w-xs mt-4 md:mt-0">
                                            {capa.tools.map((tool) => (
                                                <span key={tool} className="px-3 py-1 text-xs font-mono text-white/80 bg-black/40 rounded border border-white/10 hover:border-white/30 transition-colors cursor-default">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
}

export default Arquitectura;