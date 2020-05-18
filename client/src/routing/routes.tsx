import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Room from '../components/Room';
import Home from '../components/common/Home';

export const ROUTES: { [index: string]: string } = {
  LANDING: '/',
  INVITATION: '/invitation/:roomId',
  ROOM: '/room/:id',
};

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING} component={Home} />
    <Route exact path={ROUTES.INVITATION} component={Home} />
    <Route exact path={ROUTES.ROOM} component={Room} />
  </Switch>
);

export default Routes;
