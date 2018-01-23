import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Preview from '../components/Preview';
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
        <Route path="/preview" component={Preview} exact={true} />
        <Route path="/preview_large" component={Preview_large} exact={true} />
        <Route path="/createnew" component={CreateNew} exact={true} />
        <Route path="/createnewcreate" component={CreateNewCreate} exact={true} />
        <Route path="/addsign" component={AddSign} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </BrowserRouter>
);

export default AppRouter;
