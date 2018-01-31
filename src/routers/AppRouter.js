import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Schema_1 from '../components/Schema_1';
import Schema_2 from '../components/Schema_2';
import Preview_large from '../components/Preview_large';
import CreateNew from '../components/CreateNew';
import CreateNewCreate from '../components/CreateNewCreate';
import AddSign from '../components/AddSign';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/schema_1" component={Schema_1} />
        <Route path="/schema_2" component={Schema_2} />
        <Route path="/schema_forhandsgranska_id" component={Preview_large}  />
        <Route path="/schema_skapa" component={CreateNew}  />
        <Route path="/schema_skapa_id" component={CreateNewCreate}  />
        <Route path="/addsign" component={AddSign} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </BrowserRouter>
);

export default AppRouter;
