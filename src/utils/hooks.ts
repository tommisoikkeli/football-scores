import React, { useState, useEffect } from 'react';

export function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  handler: () => void
): void {
  const handleOutsideClick = (event: React.MouseEvent<HTMLElement>): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick as any);
    return () => window.removeEventListener('click', handleOutsideClick as any);
  });
}
