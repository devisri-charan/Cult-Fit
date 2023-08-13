import React from 'react'
import { Typography,Stack,Button } from '@mui/material';
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";


const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifUrl,name,target,equipment} = exerciseDetail;
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{
      flexDirection: {lg: "row"},
      p: "20px",
      alignItems: "center",
    }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
      <Stack
      sx={{gap:{lg:"35px",xs:"20px"}}}>
        <Typography variant="h4" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. <span>{name}</span> is a great exercise for your {bodyPart}. It will help you to strengthen your {target} muscles. You can do this exercise with {equipment}.
        </Typography>
        {extraDetails.map((detail,index) => (
          <Stack key={index} gap="24px" alignItems="center" direction="row">
            <Button sx={{background: "#fff2db", borderRadius: "50%",width:"100px",height:"100px"}}>
              <img src={detail.icon} alt={detail.name} style={{width:"50px",height:"50px"}}/>
            </Button>
            <Typography variant="h6" textTransform="capitalize">{detail.name}</Typography>
          </Stack>))}
      </Stack>
    </Stack>
  )
}

export default Detail