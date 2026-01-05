import Typewriter from '../components/Typewriter'

function Hero() {
    return (
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden bg-gray-900">

            <div className='absolute inset-0 w-full h-full pointer-events-none'>
                <div className='absolute top-0 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob'></div>
                <div className='className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"'></div>
                <div className='className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"'></div>
            </div>

            <div className='absolute inset-0 w-full h-full bg-grid-white animate-grid-flow opacity-20 pointer-events-none'></div>

            <div className='absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900 pointer-events-none'></div>

            <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    <Typewriter text="Tecnología que conecta" speed={50} delay={300} /> <br/>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">
                        <Typewriter text="procesos, personas e inteligencia" speed={30} delay={1400} />
                    </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]">
                    Diseñamos <strong>sistemas vivos</strong> que aprenden,
                    se adaptan y generan impacto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_2.5s_forwards]">
                    <a href="#contacto" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                        Comenzar
                    </a>
                    <a href="#servicios" className='px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm font-bold cursor-pointer'>
                        Explorar
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;