'use client';
// components/CityDirectorySkeleton.jsx
import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Skeleton, useTheme } from '@mui/material';

export default function CityDirectorySkeleton({ count = 6 }) {
  const theme = useTheme();
  
  return (
    <Box sx={{ mt: 4, mb: 4, ml: 4, mr: 4 }}>
      <Grid container spacing={3}>
        {Array.from({ length: count }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                borderRadius: 3, 
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                }
              }}
            >
              {/* Skeleton for City Image with shine effect */}
              <CardMedia sx={{ position: 'relative', overflow: 'hidden' }}>
                <Skeleton 
                  variant="rectangular" 
                  height={180}
                  width={180}
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? 'grey.700' : 'grey.200',
                    borderRadius: 0,
                  }}
                />
                {/* Shine overlay animation */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                    animation: 'shine 1.5s infinite',
                    '@keyframes shine': {
                      '0%': { transform: 'translateX(-100%)' },
                      '100%': { transform: 'translateX(100%)' },
                    }
                  }}
                />
              </CardMedia>

              <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                {/* Skeleton for City Name with pulse animation */}
                <Skeleton 
                  variant="text" 
                  width="60%" 
                  height={32} 
                  sx={{ 
                    mb: 1.5,
                    borderRadius: 1,
                    bgcolor: theme.palette.mode === 'dark' ? 'grey.600' : 'grey.100',
                  }} 
                />
                
                {/* Skeleton for City Description with staggered animation */}
                <Skeleton 
                  variant="text" 
                  width="90%" 
                  height={20} 
                  sx={{ 
                    mb: 1,
                    borderRadius: 0.5,
                    bgcolor: theme.palette.mode === 'dark' ? 'grey.700' : 'grey.200',
                    animationDelay: '0.1s'
                  }} 
                />
                <Skeleton 
                  variant="text" 
                  width="80%" 
                  height={20}
                  sx={{ 
                    borderRadius: 0.5,
                    bgcolor: theme.palette.mode === 'dark' ? 'grey.700' : 'grey.200',
                    animationDelay: '0.2s'
                  }} 
                />
                
                {/* Additional details skeleton */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2.5 }}>
                  <Skeleton 
                    variant="circular" 
                    width={24} 
                    height={24}
                    sx={{ 
                      bgcolor: theme.palette.mode === 'dark' ? 'grey.600' : 'grey.100',
                    }} 
                  />
                  <Skeleton 
                    variant="text" 
                    width="30%" 
                    height={20}
                    sx={{ 
                      borderRadius: 0.5,
                      bgcolor: theme.palette.mode === 'dark' ? 'grey.600' : 'grey.100',
                    }} 
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}