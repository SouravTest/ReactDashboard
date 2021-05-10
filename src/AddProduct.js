import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header'
function AddProduct() {
	const [name, setName] = useState("");
	const [image, setFile] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const histoy = useHistory();
	async function productAdd(){
		let item = {name,image,price,description};
		// console.log(item);
		const formData= new FormData();
		formData.append("image",image)
		formData.append("name",name)
		formData.append("price",price)
		formData.append("description",description)

		let result = await fetch("http://127.0.0.1:8000/api/addproduct",{
		method: 'POST',
				body: formData
			});
			alert("Saved");
	}
	return (
		<div>
			<Header />
			<div className="col-sm-6 offset-sm-3">
				<h1>AddProduct Page</h1>
				<br />
				<input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input><br></br>
				<input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} placeholder="Choose image.."></input><br></br>
				<input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"></input><br></br>
				<input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description .."></input><br></br>
				<button onClick={productAdd} className="btn btn-warning">Add Product</button>
			</div>
		</div>
	)
}

export default AddProduct