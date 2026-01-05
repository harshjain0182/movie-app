import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getMovieByGenre, getMoviesByRating } from '../../api/movies';

export default function SelectorComponent({name, value}) {

  const [selectedValue, setSelectedValue] = useState('');

  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if(name.toLowerCase().includes('genres')) {
      dispatch(getMovieByGenre(event.target.value));
    } else {
      dispatch(getMoviesByRating(event.target.value));
    }
  };
  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {
          // use unique ids so multiple selectors don't clash
        }
        <InputLabel id={`selector-${name}-label`}>{name}</InputLabel>
        <Select
          labelId={`selector-${name}-label`}
          id={`selector-${name}-select`}
          value={selectedValue}
          label={name}
          onChange={handleChange}
        >
          {
            (value || []).length > 0 && (value || []).map((item, idx) => {
              let display = item;
              if (item && typeof item === 'object') {
                display = item.genre ?? item.ratings ?? item.rating ?? item.name ?? JSON.stringify(item);
              }
              return <MenuItem key={idx} value={display}>{display}</MenuItem>
            })
          }

        </Select>
      </FormControl>
    </Box>
  );
}