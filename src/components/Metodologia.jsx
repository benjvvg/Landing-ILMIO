function Metodologia() {
    const pasos = [
        { num: "01", titulo: "Diagnóstico", desc: "Proceso, datos, riesgos y arquitectura actual." },
        { num: "02", titulo: "Diseño", desc: "Flujos, seguridad y experiencia de usuario." },
        { num: "03", titulo: "Implementación", desc: "Integración + automatización + agentes IA." },
        { num: "04", titulo: "Go-live", desc: "UAT, entrenamiento y despliegue." },
        { num: "05", titulo: "Evolución", desc: "Soporte mensual, mejoras y métricas." },
        { num: "06", titulo: "Nodo ILMIO", desc: "Transformación en componente reutilizable." },
    ];

    return (
        <section className="py-20 px-4 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Cómo trabajamos</h2>
                    <p className="text-gray-400">Metodología simple, trazable y orientada a la continuidad.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pasos.map((paso) => (
                        <div key={paso.num} className="flex items-start p-4 rounded-xl border border-white/5 hover:border-violet-500/20 transition-colors">
                            <span className="text-4xl font-bold text-violet-900/50 mr-4 font-mono">{paso.num}</span>
                            <div>
                                <h4 className="text-white font-bold text-lg">{paso.titulo}</h4>
                                <p className="text-gray-400 text-sm">{paso.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Metodologia;