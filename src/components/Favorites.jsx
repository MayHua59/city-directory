"use client";

import React, { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';

export function Favorites({ article }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial mount
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save favorites to localStorage whenever the favorites list changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (articleToAdd) => {
    if (!favorites.find((fav) => fav.id === articleToAdd.id)) {
      setFavorites([...favorites, articleToAdd]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const isFavorite = favorites.some((fav) => fav.id === article?.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(article.id);
    } else {
      addFavorite(article);
    }
  };

  return (
    <IconButton onClick={handleToggleFavorite} aria-label="favorite">
      {isFavorite ? <StarIcon sx={{ color: 'gold' }} /> : <StarBorderIcon />}
    </IconButton>
  );
}
