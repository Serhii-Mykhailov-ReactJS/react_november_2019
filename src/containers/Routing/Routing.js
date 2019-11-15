// Core
import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
// Components
import AppBarComponent from '../../components/AppBarComponent/AppBarComponent';
// Constants
import { routing } from '../../engine/routing';
// Pages
const AboutPage = lazy(() => import('../../pages/About/About'));
const HomePage = lazy(() => import('../../pages/Home/Home'));
const Page404 = lazy(() => import('../../pages/Page404/Page404'));

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path={routing.home}>
          <AppBarComponent title="My First React App">
            <Main />
          </AppBarComponent>
        </Route>
      </Switch>
    </Router>
  );
}

function Main() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={HomePage} />
      <Route path={`${path}${routing.about}`} component={AboutPage} />
      <Route exact path={`${path}${routing.error404}`} component={Page404} />
      <Redirect to={`${url}${routing.error404}`} />
    </Switch>
  );
}

function User() {
  const { user } = useParams();
  // const ref = React.createRef(); // Текущая реализация
  // const ref1 = React.useRef(); // Текущая реализация на хуках

  return (
    <div>
      <Link to="/">About</Link>
      <br />
      User {user}
    </div>
  );
}

export default Routing;
