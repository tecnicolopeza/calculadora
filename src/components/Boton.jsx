import React from "react";
import Button from "@mui/material/Button";

function Boton(props) {
  return (
    <Button onClick={()=>props.manejarClick(props.numero)} color={props.color} variant="contained" sx={{ minWidth: "100%", minHeight: "20%" }}>
      {props.numero}
    </Button>
  );
}

export default Boton;
