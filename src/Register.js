import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header'
function Register() {
	const history = useHistory();
	useEffect(() => {
		if (localStorage.getItem('user-info')) {
			history.push("./add");
		}
	}, [])
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const histoy = useHistory();

	async function signUp() {

		var error_show = document.getElementById("er");
		var flag = 0;
		if (!name) {
			error_show.innerHTML= "Fill Name<br>";
			flag++;
		}else{
			error_show.innerHTML= "";
		}
		if (!email) {
			error_show.innerHTML+= "Fill email Address<br>";
			flag++;
		}else{
			error_show.innerHTML= "";
		}
		if (!password) {
			error_show.innerHTML+= "Enter new Password";
			flag++;
		}else{
			error_show.innerHTML= "";
		}
console.log(flag);
		if (flag == 0) {
			let item = { name, email, password };
			let result = await fetch("http://127.0.0.1:8000/api/register", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify(item)
			});
			result = await result.json();
			// console.warn(result);
			localStorage.setItem("user-info", JSON.stringify(result));
			histoy.push("/add");
		}
	}



	return (
		<>
			<Header />
			<div className="col-sm-6 offset-sm-3">
				<h3>Sign Up</h3>
				<input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /><br></br>
				<input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br></br>
				<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br>
				<span className="text-danger" id="er"></span><br></br><br></br>
				<button onClick={signUp} className="btn btn-success">Register</button><br></br>

			</div>
		</>
	)
}

export default Register