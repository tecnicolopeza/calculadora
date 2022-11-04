import React from "react";
import logo from "../img/logo.png";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function Logo() {
  return (
    <Stack
      width={"100vw"}
      marginY={2}
      className="logo-contenedor"
      alignItems={"center"}
    >
      <Box sx={{ width: { xs: "80%", sm: "60%", md: "40%" } }}>
        <img className="img-logo" width={"100%"} src={logo} alt="logo" />
      </Box>
    </Stack>
  );
}

export default Logo;
