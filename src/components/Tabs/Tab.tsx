import * as React from 'react';

interface ITabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: string;
}

export const Tab: React.FC<ITabProps> = ({ label, isActive, onClick, icon }) => (
  <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    <i className="material-icons-outlined">{icon}</i>
    <span>{label}</span>
  </div>
);
