import * as React from 'react';
import './button.scss';

interface IButtonProps {
  onClick: () => void;
  text: string;
  type: ButtonType;
  additionalClass?: string;
}

export enum ButtonType {
  DEFAULT = 'default',
  FAVORITE = 'favorite'
}

export const Button: React.FC<IButtonProps> = ({
  onClick,
  text,
  type,
  additionalClass
}) => (
  <button
    className={`button-container ${type} ${
      additionalClass ? additionalClass : ''
    }`}
    onClick={onClick}>
    <div className='button-content'>
      <span>{text}</span>
    </div>
  </button>
);
