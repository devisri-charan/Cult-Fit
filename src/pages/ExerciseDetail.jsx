import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions,youtubeOptions,fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]); // [video1,video2,video3]
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]); // [exercise1,exercise2,exercise3]
  const [equipmentExercises, setEquipmentExercises] = useState([]); // [exercise1,exercise2,exercise3]

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetail = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const exerciseVideos = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`, youtubeOptions);
      const targetMuscleExercises = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`, exerciseOptions);
      const equipmentExercises = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`, exerciseOptions);

      setExerciseDetail(exerciseDetail);
      setExerciseVideos(exerciseVideos.contents);
      setTargetMuscleExercises(targetMuscleExercises);
      setEquipmentExercises(equipmentExercises);
    };
    fetchExerciseDetail();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail