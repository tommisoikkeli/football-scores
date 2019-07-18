import * as React from 'react';
import './footer.scss';

export const Footer: React.FC = () => (
  <footer className='footer'>
    <p>
      Football data provided by the{' '}
      <a href='https://www.football-data.org/' target='_blank' rel='noopener noreferrer'>
        Football-Data.org API
      </a>
    </p>
  </footer>
);
