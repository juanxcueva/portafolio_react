// src/hooks/useScrollReveal.js
import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Una vez visible, dejamos de observar
                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options.threshold, options.rootMargin]);

    return [ref, isVisible];
};

// Hook para múltiples elementos
export const useMultipleScrollReveal = (count, options = {}) => {
    const refs = useRef([]);
    const [visibleItems, setVisibleItems] = useState(new Array(count).fill(false));

    useEffect(() => {
        const observers = [];

        refs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setVisibleItems(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                            observer.unobserve(ref);
                        }
                    },
                    {
                        threshold: options.threshold || 0.1,
                        rootMargin: options.rootMargin || '0px 0px -50px 0px',
                    }
                );

                observer.observe(ref);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [count, options.threshold, options.rootMargin]);

    const setRef = (index) => (el) => {
        refs.current[index] = el;
    };

    return [setRef, visibleItems];
};