'use client';

import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function BackButton() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <IconButton onClick={handleBack} aria-label="back" sx={{ mb: 4 }}>
      <ArrowBackIosIcon />
    </IconButton>
  );
}
