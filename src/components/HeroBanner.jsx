import React from 'react'
import { Box, Stack, Typography,Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: "212px", xs: "70px" },
      ml: { sm: "50px" },
    }} position="relative" p="20px">
      <Typography color="#ee3e38" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight="700" sx={{fontSize: {lg:"44px",xs:"40px"}}} mb={2} mt={3}>
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color="error" href='#exercises' sx={{backgroundColor: "#ee3e38",padding: "10px"}}>Explore Exercises</Button>
      <Typography color="#ee3e38" fontWeight={600} fontSize={200} sx={{opacity:0.1, display: {lg:"block", xs:"none"}}}>Exercise</Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner