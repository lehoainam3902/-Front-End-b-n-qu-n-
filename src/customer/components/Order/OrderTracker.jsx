import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const step =[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out Of Delivery",
    "Delivered",
]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {step.map((label)=><Step>
                <StepLabel sx={{color:"gumiepink", fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker