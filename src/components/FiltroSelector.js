import React from 'react'
import Select from 'react-select';

const options = [
  { value: 'likes', label: 'Más Popular' },
  { value: 'average', label: 'Mejor Valorado' },
  { value: 'chartAt', label: 'Reciente' },
 
];


function FiltroSelector({ filtros, setFiltrosValues }) {
    const handleChange = (selectedOptions) => {
        if (selectedOptions.length === 1) {
          return;
        }
        setFiltrosValues(selectedOptions);
      };
  return (
    <Select value={filtros} onChange={handleChange} options={options} />
  )
}

export default FiltroSelector