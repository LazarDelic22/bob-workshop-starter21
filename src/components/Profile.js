import React, { useState } from "react";
import { Avatar, Typography, Stack, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Profile() {
  const [themeMode, setThemeMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
      ...(themeMode === 'light'
        ? {
            // light mode colors
            background: { default: '#f5f5f5', paper: '#ffffff' },
            primary: { main: '#3f51b5' },
          }
        : {
            // dark mode colors
            background: { default: '#212121', paper: '#424242' },
            primary: { main: '#90caf9' },
          }),
    },
  });

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        alignItems="center"
        textAlign="center"
        py={5}
        bgcolor={theme.palette.background.paper}
        borderRadius={3}
        boxShadow={3}
        spacing={2}
      >
        <Avatar
          src="/bilde-av-blomst.jpeg"
          alt="Blomst"
          sx={{
            width: 150,
            height: 150,
            margin: "auto",
            border: `4px solid ${theme.palette.primary.main}`,
          }}
        />
        <Typography variant="h4" gutterBottom color={theme.palette.primary.main}>
          Lazar Delic
        </Typography>
        <IconButton onClick={toggleTheme} color="primary">
          {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Stack>
    </ThemeProvider>
  );
}

export default Profile;
