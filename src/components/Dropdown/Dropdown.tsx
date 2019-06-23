import * as React from 'react';
import './dropdown.scss';

interface IDropdownProps {
  label: string;
  options: IDropdownOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface IDropdownOption {
  label: string;
  value: string;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  label,
  options,
  onChange
}) => {
  const getOptions = (): JSX.Element[] => {
    return options.map((o: IDropdownOption, i: number) => (
      <option key={`options-${i}`} value={o.value}>
        {o.label}
      </option>
    ));
  };

  return (
    <div className='dropdown-container'>
      <div className='dropdown-label'>
        <label>{label}</label>
      </div>
      <select className='dropdown' onChange={onChange}>
        {getOptions()}
      </select>
      <i className='material-icons-outlined'>arrow_drop_down</i>
    </div>
  );
};
