import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TrignleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <Card className="" sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Nhóm 1 vặn ga brrrr
        </Typography>
        <Typography variant="body2">Congratulations</Typography>
        <Typography vatiant="h5" sx={{ my: 3.1 }}>
          420.8K
        </Typography>

        <Button size="small" variant="contained">
          View Sale
        </Button>
        <TrignleImg src=""></TrignleImg>
        <TrophyImg src="https://i.pinimg.com/564x/65/54/e6/6554e6ddc728ed42bd4d025d771f1ccb.jpg" />
      </CardContent>
    </Card>
  );
};

export default Achivement;
