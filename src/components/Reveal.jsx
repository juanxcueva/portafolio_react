import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const directionClass = (direction) => {
  switch (direction) {
    case 'left':
      return 'reveal-left';
    case 'right':
      return 'reveal-right';
    case 'scale':
      return 'reveal-scale';
    case 'fade':
      return 'reveal-fade';
    default:
      return 'reveal';
  }
};

const Reveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();
  const cls = [
    directionClass(direction),
    isVisible ? 'visible' : '',
    delay ? `delay-${delay}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
};

export default Reveal;