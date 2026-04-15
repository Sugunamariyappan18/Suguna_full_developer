import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function CursorAnimation() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    // Add cursor effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="hidden md:block fixed w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        ref={cursorDotRef}
        className="hidden md:block fixed w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-50"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}
