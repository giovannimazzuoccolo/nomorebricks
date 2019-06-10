import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Exercises from "./views/exercises";
import App from "./App";

const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route path="/exercises" component={Exercises} />
    </React.Fragment>
  );
};

export default Routes;
