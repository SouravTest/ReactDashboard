import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header'
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	useEffect(() => {
		if (localStorage.getItem('user-info')) {
			history.push("./add");
		}
	}, [])
	async function login() {
		let item = { email, password }
		let result = await fetch("http://127.0.0.1:8000/api/login", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(item)
		});
		result = await result.json();
		if (result.error) {
			alert(result.error);
		}
		else {
			localStorage.setItem('user-info', JSON.stringify(result));
			history.push("./add");
		}

	}
	return (
		<div>
			<Header />
			<div className="col-sm-6 offset-sm-3">
				<h1>Login Page</h1>
				<input type="text" required className="form-control" placeholder="email" onChange={(e) => setEmail(e.target.value)} /><br></br>
				<input type="password" required className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} /><br></br>
				<button onClick={login} className="btn btn-primary">Login</button>
			</div>
		</div>
	)
}

export default Login