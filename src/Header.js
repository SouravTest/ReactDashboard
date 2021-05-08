import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header(){
	return(
	
			<Navbar bg="dark" varient="dark">
			<Navbar.Brand href="">Ecom</Navbar.Brand>
			<Nav className="mr-auto nav_bar_wrapper">
			<Link to="/add" >Add product</Link>
			<Link to="/update">Update product</Link>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
			</Nav>
			</Navbar>
			)
		}

export default Header