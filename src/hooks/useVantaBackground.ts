import { useEffect, useRef } from 'react';

export function useVantaBackground(containerRef: React.RefObject<HTMLDivElement | null>): void {
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    const checkVantaAndInit = () => {
      if (containerRef.current && typeof window !== 'undefined' && (window as any).VANTA && (window as any).VANTA.BIRDS && !vantaRef.current) {
        try {
          vantaRef.current = (window as any).VANTA.BIRDS({
            el: containerRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1.0,
            scaleMobile: 1.0,
            color1: 0x0d1d31,
            color2: 0x0c0d13,
          });
        } catch (err) {
          console.error('VANTA initialization error:', err);
        }
      } else if (!vantaRef.current) {
        setTimeout(checkVantaAndInit, 500);
      }
    };

    const timer = setTimeout(checkVantaAndInit, 100);

    return () => {
      clearTimeout(timer);
      if (vantaRef.current) {
        try {
          vantaRef.current.destroy();
        } catch (err) {
          console.error('VANTA destroy error:', err);
        }
        vantaRef.current = null;
      }
    };
  }, [containerRef]);
}
