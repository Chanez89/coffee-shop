import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js';
import Home from './Home.js';
import CoffeeShopPage from './CoffeeShopPage.js';
import NewDrinkForm from './NewDrinkForm.js';
import About from './About.js';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/CoffeeShop'>
          <CoffeeShopPage />
        </Route>
        <Route exact path='/NewDrinkForm'>
          <NewDrinkForm />
        </Route>
        <Route exact path='/About'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
