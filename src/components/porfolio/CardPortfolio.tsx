import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type CardPortfolioProps = {
  setState: (arg0: boolean) => void;
};

const CardPortfolio = ({ setState }: CardPortfolioProps) => {
  return (
    <Card elevation={0} sx={{ height: "400px" }}>
      <CardActionArea onClick={() => setState(true)}>
        <CardMedia
          component={"img"}
          image={"imgs/hero.png"}
          alt={`card photo`}
          height={"340"}
          sx={{ borderRadius: 0 }}
        />
      </CardActionArea>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between  ",
          height: 30,
        }}
      >
        <Typography>Title</Typography>
        <Button size="small" variant="outlined">
          Show more
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardPortfolio;
