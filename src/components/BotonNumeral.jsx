import React from "react";
import Button from "@mui/material/Button";

function BotonNumeral({ numero, color }) {
  return (
    <Button color={color} variant="contained" sx={{ minWidth: "100%", minHeight: "20%" }}>
      {numero}
    </Button>
  );
}

export default BotonNumeral;
