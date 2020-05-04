import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Room from '../components/Room';
import Form from '../components/Form';

export const ROUTES: { [index: string]: string } = {
  LANDING: '/',
  INVITATION: '/invitation/:roomId',
  ROOM: '/room/:id',
};

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING} component={Form} />
    <Route exact path={ROUTES.INVITATION} component={Form} />
    <Route exact path={ROUTES.ROOM} component={Room} />
  </Switch>
);

export default Routes;
