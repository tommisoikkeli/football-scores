import * as React from 'react';

export function useWindowWidth(): number {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
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

  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick as any);
    return () => window.removeEventListener('click', handleOutsideClick as any);
  });
}
