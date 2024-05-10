"use client";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import CardPortfolio from "components/porfolio/CardPortfolio";
import _ from "lodash";
import ModalPortfolio from "components/porfolio/ModalPortfolio";

import { useState } from "react";

const page = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleModelClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="lg" disableGutters>
      <Grid container spacing={2}>
        {_.range(4).map((card) => (
          <Grid item xs={6} md={4}>
            <CardPortfolio setState={setOpen} />
          </Grid>
        ))}

        {/* <Grid item xs={6} md={4}>
          <CardPortfolio />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardPortfolio />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardPortfolio />
        </Grid> */}
      </Grid>
      {open && <ModalPortfolio handleClose={handleModelClose} open={open} />}
    </Container>
  );
};

export default page;
