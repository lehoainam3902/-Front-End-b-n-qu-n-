import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing = {2} gap ={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56,bgcolor:'#c154c1'}}></Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-font-semibold text-lg'>Gumie</p>
                        <p className='opacity-70'>26-12-20223</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolorem fugit quas iusto unde adipisci!</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard