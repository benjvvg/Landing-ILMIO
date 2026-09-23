function Faq() {
    const preguntas = [
        {
            pregunta: "¿Qué es ILMIO?",
            respuesta: "ILMIO es una plataforma de cobranza inteligente que usa inteligencia artificial para automatizar la recuperación de matrículas y mora estudiantil de instituciones de educación superior en Chile, a través de WhatsApp, voz y reportería en tiempo real."
        }
    ];

    return (
        <section id="faq" className="py-24 px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
                </div>
                <div className="space-y-6">
                    {preguntas.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-900/40 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">{item.pregunta}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.respuesta}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
