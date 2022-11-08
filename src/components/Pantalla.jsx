import React from "react";
import Stack from "@mui/material/Stack";

const Pantalla = ({ input }) => (
  <Stack
    className="pantalla"
    bgcolor={"lightgray"}
    height={50}
    width={"100%"}
    borderRadius={1}
    marginBottom={2}
    justifyContent={"center"}
    alignItems={"flex-end"}
    fontWeight={"bold"}
    paddingRight={1}
    boxShadow={1}
  >
    {input}
  </Stack>
);
export default Pantalla;
