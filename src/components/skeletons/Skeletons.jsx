import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


export const Skeletons = () => {
  return (
    <Box sx={{ width: "100%" }} >
      <Skeleton variant="rounded" width="100%" height={115} sx={{marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={115} sx={{marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={115} sx={{marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={115} sx={{marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={115} sx={{marginBottom: "1em" }} />
    </Box>
  );
}