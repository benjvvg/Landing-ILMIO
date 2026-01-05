import { BsEnvelopeAt, BsArrowRight, BsChatText } from 'react-icons/bs';

function Contacto() {
    return (
        <section id="contacto" className='min-h-200 flex items-center justify-center px-4 relative z-10 overflow-hidden'>
            <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover -z-20'>
                <source src='src\assets\videos\video-fondoilmio.mp4' type='video/mp4'/>
            </video>
            <div className='absolute inset-0 bg-black/50 -z-10'></div>
                <div className=' w-full max-w-4xl mx-auto'>
                    <div className='relative bg-linear-to-br from-violet-900/40 to to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl'>
                        <div className='absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-violet-500 to-transparent opacity-50'></div>
                        <div className='absolute -top-24 -right-24 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none'></div>
                        <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none'></div>

                        <div className='relative z-10'>
                            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
                                Hablemos de tu proyecto
                            </h2>
                            <p className='text-gray-300 text-lg md:text-xl mb-12 mx-auto leading-relaxed'>
                                Cúentanos tu proceso crítico. Te devolvemos una ruta técnica clara para avanzar sin romper funcionalidades.
                            </p>
                            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-10'>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@ilmio.tech&su=Cotización%20Proyecto%20ILMIO"
                                target='_blank'
                                rel='noopener noreferrer' 
                                className='group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:border-white/50 backdrop-blur-sm hover:scale-105'>
                                    <BsEnvelopeAt className='text-xl' />
                                    <span>Solicitar Cotización</span>
                                    <BsArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </a>

                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@ilmio.tech&su=Solicitud%20Más%20Información"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:border-white/50 backdrop-blur-sm hover:scale-105'
                                >
                                    <BsChatText className='text-xl' />
                                    <span>Mas información</span>
                                    <BsArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </a>
                            </div>
                            <p className='text-sm text-gray-500 font-mono select-all'>
                                contacto@ilmio.tech
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Contacto;