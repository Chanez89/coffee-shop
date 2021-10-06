// import NewDrinkForm from "./NewDrinkForm.js"; // may need to change where to import this component later
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div class="container" >
      <nav style={{backgroundColor: "#fefae0", }} >
          <a class="navbar-brand" href="#">
            <img src="./logo192.png" alt="" width="30" height="24"/>
          </a>
      <NavLink to='/' exact activeStyle={{color: 'brown'}}>
        Home    
      </NavLink>
      <NavLink to='/CoffeeShop' exact activeStyle={{ color: 'brown' }}>
        Coffee Shop      
      </NavLink>
      <NavLink to='/NewDrinkForm' exact activeStyle={{ color: 'brown' }}>
        New Drink Form  
      </NavLink>
      <NavLink to='/About' exact activeStyle={{ color: 'brown' }}>
        About
      </NavLink>
      </nav>
    </div>
      
  );
}

export default NavBar;