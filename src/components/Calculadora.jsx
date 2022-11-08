import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import BotonNumeral from "./BotonNumeral";

function Calculadora() {


  const handleClick = value => console.log(value)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        bgcolor={"#7AA5D3"}
        width={{ xs: "80vw", sm: "40vw", md: "25vw", lg: "20vw" }}
        minHeight={"60vh"}
        borderRadius={3}
        alignItems={"center"}
        padding={3}
        spacing={1}
        textAlign={"center"}
        justifyContent={"center"}
        border={2}
      >
        <Grid
          xs={12}
          borderRadius={1}
          bgcolor={"#e9e9e9"}
          height={50}
          width={"95%"}
        ></Grid>
        <Grid xs={3}>
          <BotonNumeral numero={1} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={2} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={3} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral color={"secondary"} numero={"+"} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={4} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={5} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={6} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral color={"secondary"} numero={"-"} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={7} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={8} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={9} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral color={"secondary"} numero={"*"} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral color={"secondary"} numero={"="} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral numero={0} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral color={"secondary"} numero={"."} />
        </Grid>
        <Grid xs={3}>
          <BotonNumeral color={"secondary"} numero={"/"} />
        </Grid>
        <Grid xs={12}>
          <BotonNumeral color={"error"} numero={"RESET"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Calculadora;
