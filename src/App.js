import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Coinpage from "./Pages/Coinpage";
import Homepage from "./Pages/Homepage";


  const useStyles = makeStyles(()=>({
    App: {
      background: '#1a1a1d',
      color: "White",
      minHeight: "100vh",
    },
  }));

  function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header />
      <Route path="/" component={Homepage} exact />
      <Route path="/coins/:id" component={Coinpage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
