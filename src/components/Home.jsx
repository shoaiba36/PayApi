import React from 'react'
import {Grid} from "@mui/material"

export const Home = () => {
  return (
   <Grid container spacing={2}>
        <Grid item xs={4}>
            Available seats
        </Grid>
        <Grid item xs={4}>
            Booked seats
        </Grid>
   </Grid>
  )
}
