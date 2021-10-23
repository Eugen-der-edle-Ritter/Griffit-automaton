import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from '@/components/Header/Header';

import { Home } from '@/components/Main/Home/Home';
import { About } from '@/components/Main/About/About';

export const App: FC = () => {
  return (
    <Router>
      <Header
        sections={[
          { id: 0, path: '/', title: 'Home' },
          { id: 1, path: '/about', title: 'About' },
        ]}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};
