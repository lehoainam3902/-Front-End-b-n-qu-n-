import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate(); 
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-gumiepink hover:shadow-2xl'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://cdn.vox-cdn.com/thumbor/fOVL5lEL5E7mwBygcfiBqG8BSBw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25125289/vlcsnap_2023_12_01_10h37m31s394.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p className="opacity-50 text-xs font-semibold">Size: M</p>
                <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
            <p>499</p>
        </Grid>
        <Grid item xs={4}>
            {true && 
            <div>
                <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                    <span>Delivered On 29-12-2023</span>
                </p>
                <p className="text-xs">
                    Your Item Has Been Delivered
                </p>
            </div>}
            {false && 
            <p>
                <span>Expected Delivery On 29-12-2024</span>
            </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
