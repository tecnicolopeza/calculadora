import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Boton from "./Boton";
import Pantalla from "./Pantalla";
import {useState} from 'react';
import {evaluate} from 'mathjs';

function Calculadora() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input+val)
  }

  const limpiarInput = () => {
    setInput("");
  } 

  const calcularResultado = () => {
    setInput(evaluate(input));
  } 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        bgcolor={"#7AA5D3"}
        width={{ xs: "80vw", sm: "30vw", md: "25vw", lg: "20vw" }}
        minHeight={"60vh"}
        borderRadius={3}
        alignItems={"center"}
        padding={3}
        spacing={1}
        textAlign={"center"}
        justifyContent={"center"}
        border={2}

      >
        <Pantalla input={input} />

        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={1} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={2} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={3} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} color={"secondary"} numero={"+"} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={4} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={5} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={6} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} color={"secondary"} numero={"-"} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={7} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={8} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={9} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} color={"secondary"} numero={"*"} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={calcularResultado} color={"secondary"} numero={"="} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} numero={0} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} color={"secondary"} numero={"."} />
        </Grid>
        <Grid xs={3}>
          <Boton manejarClick={agregarInput} color={"secondary"} numero={"/"} />
        </Grid>
        <Grid xs={12}>
          <Boton manejarClick={limpiarInput} color={"error"} numero={"RESET"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Calculadora;
