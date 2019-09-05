import React, { useRef } from 'react';
import './dropdown.scss';
import { useOutsideClick } from '../../utils/hooks';

interface IDropdownProps {
  label: string;
  options: string[];
  onClick: () => void;
  onItemSelect: (option: string) => void;
  isOpen: boolean;
  value: string;
  outsideClickHandler: () => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  label,
  options,
  onClick,
  onItemSelect,
  isOpen,
  value,
  outsideClickHandler
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, outsideClickHandler);

  const getOptions = (): JSX.Element[] => {
    return options.map((o: string, i: number) => (
      <li
        className={`dropdown-option ${value === o ? 'active' : ''}`}
        key={`options-${i}`}
        onClick={() => onItemSelect(o)}>
        {o}
      </li>
    ));
  };

  return (
    <div className='dropdown-container'>
      <div className='dropdown-label'>
        <label>{label}</label>
      </div>
      <div
        className={`dropdown ${isOpen ? 'open' : ''}`}
        onClick={onClick}
        ref={dropdownRef}>
        <div className='selected'>{value}</div>
        <ul className={`dropdown-options ${isOpen ? 'open' : ''}`}>
          {getOptions()}
        </ul>
      </div>
      <i className='material-icons-outlined'>
        {isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
      </i>
    </div>
  );
};
