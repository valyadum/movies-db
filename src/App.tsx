import React from 'react';
import logo from "/Users/valentynadumbrava/Desktop/movies-db/src/cinema-ico.png";
import './App.css';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { AppBar, Box,  createTheme, CssBaseline, Link, ThemeProvider, Toolbar } from '@mui/material';

function HeaderLink({children,to}:{children:React.ReactNode,to:string}) {
  return (
    <Link
      component={RouterLink}
      to={to}
      variant="button"
      color="inherit"
      sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
      underline="hover"
      
    >
      {children}
    </Link>
  );
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#104d75",
    },
    secondary: {
      main: "#212529",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="regular">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="App-link">
            <HeaderLink  to="/">
              Home
            </HeaderLink>
            <HeaderLink to="/movies">Movies</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
          </nav>
        </Toolbar>
      </AppBar>
      <Box>
        <main className="App-main">
          <Outlet />
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;
