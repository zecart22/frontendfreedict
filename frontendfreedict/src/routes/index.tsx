import { Switch } from "react-router";
import { Login } from "../pages/Login";
import { DashBoard } from "../pages/DashBoard";
import { Signup } from "../pages/Signup";
import { Route } from "react-router-dom";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="signup" component={Signup} />
      <Route exact path="dashboard" component={DashBoard} />
    </Switch>
  );
};
