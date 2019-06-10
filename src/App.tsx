import * as React from "react";
import "./App.css";
import Landing from "./views/landing";
import Theme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Exercises from "./views/exercises";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/exercises" component={Exercises} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
