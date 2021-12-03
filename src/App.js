import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./layout/layout";
import Home from "./apps/home/home";
import Dtt from "./apps/dtt/dtt"

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={"/"}>
              <Dtt />
            </Route>
            <Route path={"/home"}>
              <Home />
            </Route>
            <Route path={"/dtt"}>
              <Dtt />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
