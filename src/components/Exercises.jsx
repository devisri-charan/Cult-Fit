import React, {useEffect,useState} from 'react';
import { Pagination } from '@mui/material';
import {Box,Typography,Stack} from '@mui/material';

import {exerciseOptions,fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage,setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  useEffect(() => {
    const fetchExercises = async () => {
      let excerisesData = [];
      if (bodyPart === 'all') {
        excerisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }else{
        excerisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      if (Array.isArray(excerisesData)) { // Check if the fetched data is an array
        setExercises(excerisesData);
      } else {
        console.error("Fetched data is not an array:", excerisesData);
      }
    }
    fetchExercises();
  },[bodyPart]);

  const paginate = (event,page) => {
    setCurrentPage(page);
    window.scrollTo({top:1800,behavior: 'smooth'});
  }
  return (
    <Box id="exercises"
    sx={{mt: {lg: "110px"}}}
    mt="10px"
    p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise,index) => (<ExerciseCard key={index} exercise={exercise}/>))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 0 && 
        <Pagination 
        variant="outlined" 
        shape="rounded" 
        defaultPage={1}
        count={Math.ceil(exercises.length/exercisesPerPage)} 
        page={currentPage}
        onChange={paginate}
        size='larger'/>}
      </Stack>
    </Box>
  )
}

export default Exercises