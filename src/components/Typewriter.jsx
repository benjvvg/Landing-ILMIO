import { useState, useEffect } from "react";
const Typewriter = ({ text, speed = 100, delay = 0}) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        setDisplayText('');
        const startTimeout = setTimeout(() => {
            const typingInterval = setInterval(() => {
                setDisplayText((prev) => {
                    if (prev.length >= text.length) {
                        clearInterval(typingInterval);
                        return prev;
                    }
                    return text.slice(0, prev.length + 1);
                })
            }, speed);

            return () => clearInterval(typingInterval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, speed, delay])

    return (
        <span>
            {displayText}
        </span>
    );
}

export default Typewriter;