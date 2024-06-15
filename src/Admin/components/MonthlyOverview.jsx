import { TrendingUp, AccountCircle } from "@mui/icons-material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const salesData = [
  {
    stats: "245K",
    tittle: "Sales",
    color: "#FFF222",
    icon: <TrendingUp sx={{ frontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5K",
    tittle: "Customers",
    color: "#45CE30",
    icon: <AccountCircle sx={{ frontSize: "1.75rem" }} />,
  },
  {
    stats: "1.54K",
    tittle: "Products",
    color: "#EC4849",
    icon: <SettingsCellIcon sx={{ frontSize: "1.75rem" }} />,
  },
  {
    stats: "88K",
    tittle: "Revenue",
    color: "#4BCFFA",
    icon: <AttachMoneyIcon sx={{ frontSize: "1.75rem" }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "common.white",
            backgoundColor: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.tittle}</Typography>
          <Typography varian="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card sx={{}}>
      <CardHeader
        title="Thông tin tháng vừa qua"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600 }}>
              Total 48.5% groth
            </Box>
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "15px !important",
          },
        }}
      />
      <CardContent
        sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}
      ></CardContent>
      <Grid container spacing={[5, 0]}>
        {renderStats()}
      </Grid>
    </Card>
  );
};

export default MonthlyOverview;
