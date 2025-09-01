import React from 'react';
import { TextField, InputAdornment, Box, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ onSearch }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', my: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="လိုချင်တာ ရိုက်ရှာလိုက်ပါ"
        onChange={(e) => onSearch(e.target.value)}
        sx={{
          maxWidth: 400,
          borderRadius: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            bgcolor: '#f0f2f5',
            fontSize: '14px',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'grey.400',
              borderWidth: '1px',
              boxShadow: '0 2px 8px rgba(60, 72, 88, 0.15)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'grey.400',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <SettingsIcon color="action" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

