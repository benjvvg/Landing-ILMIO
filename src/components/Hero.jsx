import { Link } from "react-router-dom";
function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Bienvenido a <span className="text-violet-400">ILMIO</span>
            </h1>
        </section>
    )
}

export default Hero;