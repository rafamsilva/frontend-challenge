import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";

const routes = require.context(
  // O caminho relativo da pasta
  "./modules",
  // Se deve ou não olhar subpastas
  true,
  // Expressão regular para localizar nomes
  /.route./
);

let mappedRoutes = [];
routes.keys().forEach((fileName) => {
  routes(fileName).default.forEach((item) => {
    mappedRoutes.push(item);
  });
});

function renderRouter() {
  mappedRoutes.reverse();

  return (
    <Router>
      <Header />
      <Switch>
        {mappedRoutes.map((route, i) => (
          <Route
            path={route.path}
            exact={true}
            render={(routerProps) => (
              <div className="content">
                <route.component {...routerProps} />
              </div>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default renderRouter;
