import { Typography } from '@mui/material'
import React from 'react'

const Title = (props) => {
  return (
    <Typography fontWeight={100} mb={2} mt={2} variant="h6">
        {props.title}
    </Typography>
  )
}

export default Title