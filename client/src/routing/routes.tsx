import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Room from '../components/Room';
import InvitationForm from '../components/Form/InvitationForm';
import MainForm from '../components/Form/MainForm';

export const ROUTES: { [index: string]: string } = {
  LANDING: '/',
  INVITATION: '/invitation/:roomId',
  ROOM: '/room/:id',
};

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING} component={MainForm} />
    <Route exact path={ROUTES.INVITATION} component={InvitationForm} />
    <Route exact path={ROUTES.ROOM} component={Room} />
  </Switch>
);

export default Routes;
