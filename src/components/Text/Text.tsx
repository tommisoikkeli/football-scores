import * as React from 'react';
import './text.scss';

interface ITextProps {
  children: React.ReactNode;
}

export const Text: React.FC<ITextProps> = props => (
  <div className='text-wrapper'>
    <p>{props.children}</p>
  </div>
);
