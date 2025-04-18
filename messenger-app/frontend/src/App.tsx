import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
};

export default App;