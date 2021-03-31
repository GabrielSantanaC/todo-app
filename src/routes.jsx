import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todo from './pages/Todo';

const routes = [{
  component: Home,
  path: '/',
  name: 'Home',
}, {
  component: Todo,
  path: '/todo',
  name: 'Todo',
}];

const Routes = () => (
  <BrowserRouter>
    <Navbar routes={routes} />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
