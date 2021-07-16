import { NavLink } from 'react-router-dom';
import './Navigation.css';
import DashboardIcon from '@material-ui/icons/Dashboard';

const NavLinks = props => {
 

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
        DashBoard
        </NavLink>
      </li>
     
      <li>
        <NavLink to="/cusromer" exact>
         Customers
        </NavLink>
      </li>
      
      <li>
        <NavLink to="/product" exact>
         Products
        </NavLink>
      </li>
      
      <li>
        <NavLink to="/account" exact>
         Accounts
        </NavLink>
      </li>
      
      <li>
        <NavLink to="/setting" exact>
        Setting
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" exact>
         Login
        </NavLink>
      </li>
      
      <li>
        <NavLink to="/register" exact>
         Register
        </NavLink>
      </li>
      <li>
        <NavLink to="error" exact>
         Error
        </NavLink>
      </li>
      
      
      
    
    </ul>
  );
};

export default NavLinks;
