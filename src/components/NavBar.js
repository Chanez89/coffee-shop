// import NewDrinkForm from "./NewDrinkForm.js"; // may need to change where to import this component later
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <NavLink to='/' exact activeStyle={{color: 'red'}}>
        Home
      </NavLink>
      <NavLink to='/CoffeeShop' exact activeStyle={{ color: 'red' }}>
        Coffee Shop
      </NavLink>
      <NavLink to='/NewDrinkForm' exact activeStyle={{ color: 'red' }}>
        New Drink Form
      </NavLink>
      <NavLink to='/About' exact activeStyle={{ color: 'red' }}>
        About
      </NavLink>
    </div>
  );
}

export default NavBar;