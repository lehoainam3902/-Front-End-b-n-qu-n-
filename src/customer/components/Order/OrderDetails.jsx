import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { pink } from '@mui/material/colors';


const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1,1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://cdn.vox-cdn.com/thumbor/fOVL5lEL5E7mwBygcfiBqG8BSBw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25125289/vlcsnap_2023_12_01_10h37m31s394.jpg"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Lorem ipsum dolor sit amet.</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color: Cam</span><span>Size:M</span></p>
                <p>Seller: Ang Xoai</p>
                <p>3000</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{color:pink[400]}}>
                <StarOutlineIcon sx={{fontSize:"2rem"}} className="px-2 text-2xl"/>
                <span>Rate & Reviews</span>
            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
