import React from 'react';
import './tabs.scss';

interface ITabsProps {
  children: React.ReactNode;
}

export const Tabs: React.FC<ITabsProps> = ({ children }) => (
  <React.Fragment>
    <div className='tabs-container'>{children}</div>
    <div className='tab-divider' />
  </React.Fragment>
);
