import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import ResponsiveDrawer from './component/SideBar';
import DashBoard from './component/DashBoard/DashBoard'


function App() {


  return (
    <Router>

   <ResponsiveDrawer>
   <Route path="/" exact>
          < DashBoard/>
        </Route>
   </ResponsiveDrawer>

    </Router>

      
    
   
  );
}

export default App;
