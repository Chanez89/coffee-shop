import { useState } from 'react';

import DrinkMenu from './DrinkMenu.js';
import SearchBar from './SearchBar.js'; // may need to change where to import this component
import reactDom from 'react-dom';

function CoffeeShopPage({drinksMenuArr}) {

// filter drinks by search text, currently callback returning true for placeholder


//creatubg state to hold search form data
const [searchFormData, setSearchFormData] = useState("")

//capturing what the user types and saving it to searchFormData
function handleChange(event){
  setSearchFormData(event.target.value)
}
  
// using filter to render only what matches the 
const drinksToDisplay = drinksMenuArr.filter(singleDrink => {
  if (singleDrink.title.toLowerCase().includes(searchFormData.toLowerCase())) {
    return true;
  } else {
    return false;
  }
});
  


  return (
    <div>
      <h1>CoffeeShopPage component</h1>
      <SearchBar handleChange={handleChange} searchFormData={searchFormData}  />
      <DrinkMenu drinksToDisplay={drinksToDisplay} />
    </div>
  );
}

export default CoffeeShopPage;