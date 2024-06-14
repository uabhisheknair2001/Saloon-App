import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signin from './Components/Signin';
import NotFound from './Components/NotFound';
import BookedAppoint from './Components/BookedAppoint';
import AppointBook from './Components/AppointBook';


function App() {
  return (
    <BrowserRouter>
    <Router>
      <Route exact path='/' Component={Home}></Route>
      <Route exact path='/Login' Component={Login}></Route>
      <Route exact path='/Signin' Component={Signin}></Route>
      <Route exact path='/Error' Component={NotFound}></Route>
      <Route exact path='/BookedAppoint' Component={BookedAppoint}></Route>
      <Route exact path='/AppointBook' Component={AppointBook}></Route>
    </Router>
    </BrowserRouter>
  );
}

export default App;
