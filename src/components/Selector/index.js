import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../slice/movieSlice';

export default function SelectorComponent({name, value, filterKey}) {

  const dispatch = useDispatch();
  const selectedValue = useSelector(state => state.movies.filters[filterKey]);

  const handleChange = (e) => {
    dispatch(setFilter({key: filterKey, value: e.target.value}));
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
          label={name}
          onChange={handleChange}
        >
          <MenuItem value="">All</MenuItem>
          {value.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>
  );
}