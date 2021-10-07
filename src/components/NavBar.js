// import NewDrinkForm from "./NewDrinkForm.js"; // may need to change where to import this component later
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light nav-bar-styling shadow-lg p-3 mb-5 bg-white rounded" >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./logo192.png" alt="" width="50" height="48"/>
          </a>
          <NavLink to='/' className="text-muted no-underline" >
            Home    
          </NavLink>
          <NavLink to='/CoffeeShop' className="text-muted no-underline">
            Coffee Shop      
          </NavLink>
          <NavLink to='/NewDrinkForm' className="text-muted no-underline">
            New Drink Form  
          </NavLink>
          <NavLink to='/About' className="text-muted no-underline">
            About
          </NavLink>
        </div>
      </nav>
    </div>  
  );
}

export default NavBar;