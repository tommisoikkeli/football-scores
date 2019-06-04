import * as React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => (
  <div className='header'>
    <Link to='/'>
      <h1>Football hub</h1>
    </Link>
  </div>
);
