import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loaders from './Loaders';


const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box
    sx={{
      mt: { lg: "200px", xs: "20px" },
    }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle
      </Typography>
      <Stack direction="row" sx={{p:"2",position:"relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loaders/>}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that can be done with the same equipment
      </Typography>
      <Stack direction="row" sx={{p:"2",position:"relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loaders/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises