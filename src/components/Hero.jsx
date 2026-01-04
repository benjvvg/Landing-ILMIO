import { Link } from "react-router-dom";
import Typewriter from '../components/Typewriter'

function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
                {/* Info adicional */}
                {/*<div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-violet-300 animate-pulse"></span>
                    <span className="text-violet-100 text-sm font-medium animate-pulse">Arquitectura + Automatización + IA Aplicada</span>
                </div>*/}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    <Typewriter text="Tecnología que conecta" speed={60} delay={1000} /> <br/>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">
                        <Typewriter text="procesos, personas e inteligencia" speed={35} delay={2100} />
                    </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]">
                    Diseñamos <strong>sistemas vivos</strong> que aprenden,
                    se adaptan y generan impacto real.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <a href="#servicios" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all">
                        Explorar servicios
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;