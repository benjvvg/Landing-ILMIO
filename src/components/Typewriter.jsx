import { useState, useEffect } from "react";
const Typewriter = ({ text, speed = 100, delay = 0}) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const startTimeout = setTimeout(() => {
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText((prev) => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);

            return () => clearInterval(typingInterval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, speed, delay])

    return (
        <span>
            {displayText}
            <span className="animate-cursor"></span>
        </span>
    );
}

export default Typewriter;