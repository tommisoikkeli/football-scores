import * as React from 'react';

interface ITabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab: React.FC<ITabProps> = ({ label, isActive, onClick }) => (
  <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    <span>{label}</span>
  </div>
);
