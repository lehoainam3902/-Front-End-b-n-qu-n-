import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {/* 1st Grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Pham Tran Cong Hoang
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
        </Grid>
        {/* 2nd Grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Le Hoai Nam
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
        </Grid>
        {/* 3rd Grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Do Duy Anh
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
        </Grid>
        {/* 4th Grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Nguyen Duc Manh
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">&copy; Nhom 1</Typography>
        <Typography variant="body2" component="p" align="center">Made By Nhom 1</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
