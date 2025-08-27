import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ onSearch }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder="ရှာဖွေရန်"
      onChange={(e) => onSearch(e.target.value)}
      sx={{
        maxWidth: 400,
        borderRadius: 2,
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
          bgcolor: '#f0f2f5',
          fontSize: '14px',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
};

