 import logo from './logo.svg';
import './App.css';

import {Button} from 'react-bootstrap'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />

      <h2>Ecom Project</h2>

<Route path="/login">
<Login />
</Route>
<Route path="/register">
<Register />
</Route>





      </BrowserRouter>
  </div>
  )
}

export default App;
