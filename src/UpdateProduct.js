import React, { useEffect, useState } from 'react';
import { useHistory, withRouter, Link } from 'react-router-dom'
import Header from './Header'
function UpdateProduct(props) {
	// console.warn("props",props.match.params.id);
	const [data, setData] = useState([]);
	const [name, setName] = useState("");
	const [image, setFile] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	let pid = props.match.params.id;
	useEffect(async () => {
		let result = await fetch("http://127.0.0.1:8000/api/showproduct/" + pid);
		result = await result.json();
		setData(result);
		// console.log(result);
		setName(result.name);
		setPrice(result.price);
		setDescription(result.description);
		setFile(result.file);
	}, [])


	async function editOperation(id) {
		const formData= new FormData();
		formData.append("image",image)
		formData.append("name",name)
		formData.append("price",price)
		formData.append("description",description)

		let result = await fetch("http://127.0.0.1:8000/api/updateproduct/"+id+"?_method=PUT",{
		method: 'POST',
				body: formData
			});
			alert("Update success");
	}

	return (
		<div className="conatiner">
			<div className="row">
				<Header />
				<h1>UpdateProduct Page</h1><br /><br /><br />
				<Link to={"/"}> <span className="btn btn-info btn-sm">Back</span></Link><br />
				<div className="col-sm-6 offset-sm-1">
					<input type="text" className="form-control"
						onChange={(e) => setName(e.target.value)}
						defaultValue={data.name}></input><br></br>
					<input type="file" className="form-control"
						onChange={(e) => setFile(e.target.files[0])} defaultValue={data.path} ></input><br></br>
					<input type="text" className="form-control"
						onChange={(e) => setPrice(e.target.value)} defaultValue={data.price} ></input><br></br>
					<input type="text" className="form-control"
						onChange={(e) => setDescription(e.target.value)} defaultValue={data.description} ></input><br></br>

					<button  onClick={() => { editOperation(data.id) }} className="btn btn-success">Update</button>
				</div>
				<div className="col-sm-2 offset-sm-1 p-5">
					<p>Old Image</p>
					<img width={350} src={"http://127.0.0.1:8000/" + data.path} />
				</div>
			</div>
		</div>
	)
}

export default withRouter(UpdateProduct)