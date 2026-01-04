import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getMovieByGenre } from '../../api/movies';

export default function SelectorComponent({name, value}) {

  const [selectedValue, setSelectedValue] = useState('');

  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    dispatch(getMovieByGenre(event.target.value));
  };
  console.log(selectedValue);
  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={name}
          onChange={handleChange}
        >
          {
            value.length > 0 && value.map(item => <MenuItem  value={name.toLowerCase().includes('genres') ? item.genre :item.ratings}>{name.toLowerCase().includes('genres') ? item.genre :item.ratings}</MenuItem>)
          }

        </Select>
      </FormControl>
    </Box>
  );
}