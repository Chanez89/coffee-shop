import DrinkMenu from './DrinkMenu.js';
import SearchBar from './SearchBar.js'; // may need to change where to import this component

function CoffeeShopPage({drinksMenuArr, setDrinksMenuArr}) {

  // filter drinks by search text, currently callback returning true for placeholder
  const drinksToDisplay = drinksMenuArr.filter(singleDrink => true);
  
  return (
    <div>
      <h1>CoffeeShopPage component</h1>
      <SearchBar />
      <DrinkMenu drinksToDisplay={drinksToDisplay} />
    </div>
  );
}

export default CoffeeShopPage;