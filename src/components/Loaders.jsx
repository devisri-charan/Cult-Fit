import React from 'react'
import { Stack } from '@mui/material'
import {InfinitySpin} from "react-loader-spinner"
 
const Loaders = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
      <InfinitySpin color="#ee3e38"/>
    </Stack>
  )
}

export default Loaders