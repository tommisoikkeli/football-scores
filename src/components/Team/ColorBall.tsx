import React from 'react';

interface IColorBallProps {
  color: string;
}

export const ColorBall: React.FC<IColorBallProps> = ({ color }) => {
  const getColor = (color: string): string => {
    // return hex code if css can't interpret the color name
    switch (color) {
      case 'navyblue':
        return '#000080';
      case 'claret':
        return '#7f1734';
      default:
        return color;
    }
  };

  return <div className='color-ball' style={{ background: getColor(color) }} />;
};
