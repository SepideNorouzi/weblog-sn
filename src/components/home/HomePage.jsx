import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

function HomePage() {
  // the si in here is 8px, so when we use 3, it means 3*8=24px.
  // There are five default grid breakpoints: xs, sm, md, lg, and xl. You can give
  // integer values for each breakpoint to indicate how many of the 12 available columns
  // are occupied by the component
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item size={{ xs: 12, md: 3 }} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item size={{ xs: 12, md: 9 }} mt={4}>
          {" "}
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
