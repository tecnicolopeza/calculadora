import React from "react";
import Grid from "@mui/material/Grid";
import BotonNumeral from "./BotonNumeral";

function Calculadora() {
  return (
    <Grid
      container
      rowSpacing={1}
      bgcolor={"#7AA5D3"}
      width={{ xs: "90vw", sm: "70vw", md: "35vw" }}
      height={"80vh"}
      textAlign={"center"}
      borderRadius={3}
    >
      <Grid xs={12}>Pantalla</Grid>
      <Grid xs={3}>1</Grid>
      <Grid xs={3}>2</Grid>
      <Grid xs={3}>3</Grid>
      <Grid xs={3}>+</Grid>
      <Grid xs={3}>4</Grid>
      <Grid xs={3}>5</Grid>
      <Grid xs={3}>6</Grid>
      <Grid xs={3}>-</Grid>
      <Grid xs={3}>7</Grid>
      <Grid xs={3}>8</Grid>
      <Grid xs={3}>9</Grid>
      <Grid xs={3}>*</Grid>
      <Grid xs={3}>=</Grid>
      <Grid xs={3}>0</Grid>
      <Grid xs={3}>.</Grid>
      <Grid xs={3}>/</Grid>
    </Grid>
  );
}

export default Calculadora;
