import React from 'react';
import { AppBar , Container, makeStyles, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../Cryptcontext';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#00ffef",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  },
});

const Header = () => {
  const Classes = useStyles();
  const history = useHistory();
  const {currency, setCurrency } = CryptoState();

  console.log(currency);
  
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={() => history.push(`/`)} className={Classes.title}>Crypto Tracker</Typography>

          <Select variant='outlined' style={{
            width: 100,
            height: 40,
            marginLeft: 15,
          }}
          value={currency}
          onChange={(k) => setCurrency(k.target.value)}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    );
};

export default Header;
