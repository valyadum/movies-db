import React from 'react';
import logo from "/Users/valentynadumbrava/Desktop/movies-db/src/cinema-ico.png";
import './App.css';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { AppBar, createTheme, CssBaseline, Link, ThemeProvider, Toolbar } from '@mui/material';

function HeaderLink({children,to}:{children:React.ReactNode,to:string}) {
  return (
    <Link component={RouterLink} to={to} variant="button" color="inherit" sx={{my:1, mx:1.5}}>
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
      <AppBar position='static'>
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="/movies">Movies</HeaderLink>
              <HeaderLink to="/about">About</HeaderLink>
          </nav>
        </Toolbar>
      </AppBar>
      <main className="App-main">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
