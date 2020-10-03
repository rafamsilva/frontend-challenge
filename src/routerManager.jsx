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

let mappedRoutes;
routes.keys().forEach((fileName) => {
  mappedRoutes = [...routes(fileName).default];
});

function RenderComponent(props) {
  const { route } = props;
  return (
    <Route
      path={route.path}
      exact={true}
      render={(props) => (
        <div className="content">
          <route.component {...props} />
        </div>
      )}
    />
  );
}

function renderRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        {mappedRoutes.map((route, i) => {
          return <RenderComponent route={route} key={i} />;
        })}
      </Switch>
    </Router>
  );
}

export default renderRouter;
