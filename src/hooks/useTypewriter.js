// src/hooks/useTypewriter.js
import { useState, useEffect, useCallback } from 'react';

export const useTypewriter = (
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000
) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const tick = useCallback(() => {
        const currentText = texts[textIndex];

        if (isPaused) return;

        if (!isDeleting) {
            // Escribiendo
            if (displayText.length < currentText.length) {
                setDisplayText(currentText.slice(0, displayText.length + 1));
            } else {
                // Terminó de escribir, pausar antes de borrar
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else {
            // Borrando
            if (displayText.length > 0) {
                setDisplayText(displayText.slice(0, -1));
            } else {
                // Terminó de borrar, pasar al siguiente texto
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }
    }, [displayText, textIndex, isDeleting, isPaused, texts, pauseTime]);

    useEffect(() => {
        if (isPaused) return;

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timeout = setTimeout(tick, speed);

        return () => clearTimeout(timeout);
    }, [tick, isDeleting, isPaused, typingSpeed, deletingSpeed]);

    return { displayText, isDeleting, textIndex };
};

export default useTypewriter;