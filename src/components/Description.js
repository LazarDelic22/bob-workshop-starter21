import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Om Meg
      </Typography>
      <Typography>
      Hei! Jeg er en robotikk ingeniør som har jobbet med C++ i mange år. 
      Jeg har erfaring med å utvikle programvare for roboter og andre automatiserte systemer. 
      Jeg har også jobbet med å designe og bygge roboter fra bunnen av.
      Å jobbe med robotikk er en lidenskap for meg, og jeg elsker å se hvordan teknologien vår kan hjelpe oss i hverdagen. 
      Hvis du vil vite mer om meg eller arbeidet mitt, kan du gjerne kontakte meg.
      </Typography>
    </Box>
  );
}

export default Description;
