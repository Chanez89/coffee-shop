import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js';
import Home from './Home.js';
import CoffeeShopPage from './CoffeeShopPage.js';
import NewDrinkForm from './NewDrinkForm.js';
import About from './About.js';

function App() {
  const BASE_URL = 'http://localhost:4000/drinks';

  // defining state to keep track of all drinks in menu
  const [drinksMenuArr, setDrinksMenuArr] = useState([]);

  // GET /drinks
  useEffect(() => {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => setDrinksMenuArr(data));
  }, []);

  // function to be passed down to `NewDrinkForm` component
  // to add a new drink to `drinksMenuArr`
  function addNewDrinkToDrinksMenuArr(newDrink) {
    setDrinksMenuArr([...drinksMenuArr, newDrink]);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/CoffeeShop'>
          <CoffeeShopPage drinksMenuArr={drinksMenuArr} />
        </Route>
        <Route exact path='/NewDrinkForm'>
          <NewDrinkForm addNewDrinkToDrinksMenuArr={addNewDrinkToDrinksMenuArr} />
        </Route>
        <Route exact path='/About'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
