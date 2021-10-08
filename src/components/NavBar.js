// import NewDrinkForm from "./NewDrinkForm.js"; // may need to change where to import this component later
import {NavLink} from 'react-router-dom';

function NavBar({drinksMenuArr}) {
  // initialize a variable to count the total number of drink items in cart
  let grandTotalCountOfItemsInShoppingCart = 0;

  // iterate through `drinksMenuArr` to count the total number of drink items in cart
  drinksMenuArr.forEach(
    singleDrinkObj => grandTotalCountOfItemsInShoppingCart += singleDrinkObj.count
  );

  return (
    <div>
      <nav className="navbar navbar-light bg-light nav-bar-styling shadow-lg p-3 mb-5 bg-white rounded" >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="./images/logo.png" alt="" width="100" height="80"/>
          </a>
          <NavLink to='/' className="text-muted no-underline" >
            Home
          </NavLink>
          <NavLink to='/CoffeeShop' className="text-muted no-underline">
            Our Menu     
          </NavLink>
          <NavLink to='/NewDrinkForm' className="text-muted no-underline">
            Suggest New Drink
          </NavLink>
          <NavLink to='/About' className="text-muted no-underline">
            About
          </NavLink>
          <button className="btn" disabled>
            <img src='./images/cart.svg' alt='shopping-cart' /> {grandTotalCountOfItemsInShoppingCart}
          </button>
        </div>
      </nav>
    </div>  
  );
}

export default NavBar;