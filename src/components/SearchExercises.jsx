import React, { useEffect, useState } from 'react'
import { Box, TextField, Button, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        
        if (Array.isArray(bodyPartsData)) {
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          console.error("Fetched body parts data is not an array:", bodyPartsData);
        }
      } catch (error) {
        console.error("Error fetching body parts data:", error);
      }
    }
    fetchExercises();
  },[]);

  const handleSearch = async () => {
    if (search) {
      const exercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const filteredExercises = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search));

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(filteredExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb={5} textAlign='center'>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField sx={
          {
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px"
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }
        } height="76px" value={search} placeholder='Search Exercises' type='text' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <Button className='search-btn'
          sx={{
            backgroundColor: "#ee3e38",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }} onClick={handleSearch}>Search</Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%',p:"20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises