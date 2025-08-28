import React from 'react';
import { Box, Skeleton, Grid, Card, CardContent, CardMedia } from '@mui/material';

export default function CityDirectorySkeleton({ count = 6 }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {Array.from({ length: count }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardMedia>
                <Skeleton variant="rectangular" height={140} />
              </CardMedia>
              <CardContent>
                <Skeleton variant="text" width="60%" height={32} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="90%" height={20} sx={{ mb: 0.5 }} />
                <Skeleton variant="text" width="80%" height={20} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
