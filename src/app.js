
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const App = () => (
  <div>
    <div className="container">
      <AppRouter />
    </div>

  </div>

);

ReactDOM.render(<App />, document.getElementById('app'));
