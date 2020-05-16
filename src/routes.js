import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import FilterBtn from './component/navbar/FilterBtn';
import Thumbnail from './component/Thumbnails/thumbnail';
import Home from './component/Home/index';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <FilterBtn />
    <Switch>
      <Route path='/country/:id' component={Thumbnail} />
      <Route path='/' component={Home} exact />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
