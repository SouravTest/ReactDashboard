import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
function Header() {
	const history = useHistory();
	const userData = JSON.parse(localStorage.getItem('user-info'));
	function logout() {
		localStorage.clear();
		history.push("./register");
	}
	return (

		<Navbar bg="dark" varient="dark">
			<Navbar.Brand href="">Ecom</Navbar.Brand>
			<Nav className="mr-auto nav_bar_wrapper">

				{
					localStorage.getItem('user-info') ?
						<>
							<Link to="/" >Product List</Link>
							<Link to="/add" >Add product</Link>
							<Link to="/update">Update product</Link>
						</>
						:
						<>
							<Link to="/login">Login</Link>
							<Link to="/register">Register</Link>
						</>
				}

			</Nav>
			{
				localStorage.getItem('user-info') ?
					<>
						<Nav className="text-white bg-info f-right">
							<NavDropdown title={userData && userData.name}>
								<NavDropdown.Item>Profile</NavDropdown.Item>
								<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
							</NavDropdown>
						</Nav>

					</>
					: null
			}
		</Navbar>
	)
}

export default Header