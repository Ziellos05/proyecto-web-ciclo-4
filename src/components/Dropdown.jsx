import React, {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import { Select } from '@material-ui/core'

const Dropdown = ({ label, name, defaultValue = '', required, options }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const optionsSelect = [['', 'Seleccione una opción', true], ...Object.entries(options)];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  return (
    
      
      <Select
        required={required}
        name={name}
        className='input'
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        variant='outlined'
 
      >
        {optionsSelect.map((o) => {
          return (
            <option key={nanoid()} value={o[0]} disabled={o[2] ?? false}>
              {o[1]}
            </option>
          );
        })}
      </Select>
    
  )
};

export default Dropdown;
