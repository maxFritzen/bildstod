import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Preview from '../components/Preview';
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
        <Route path="/createnew" component={CreateNew} exact={true} />
        <Route path="/createnewcreate" component={CreateNewCreate} exact={true} />
        <Route path="/addsign" component={AddSign} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </BrowserRouter>
);

export default AppRouter;
