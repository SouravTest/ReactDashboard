import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'
function ProductList() {
	const [data, setData] = useState([]);
	useEffect(() => {
		getData()
	}, [])
	// console.log(data);

	async function getData() {

		let result = await fetch("http://127.0.0.1:8000/api/listproduct");
		result = await result.json();
		setData(result);
	}

	async function deleteOperation(id) {
		let result = await fetch("http://127.0.0.1:8000/api/deleteproduct/" + id, {
			method: 'DELETE'
		});
		result = result.json();
		getData()
	}



	return (
		<div>
			<Header />
			<h1>ProductList Page</h1>
			<div className="col-sm-10 offset-sm-1">
			<br></br>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Image</th>
						<th>Price</th>
						<th>Description</th>
						<th>Operation</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((item) =>
							<tr>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td><img style={{ width: 100, height: 60 }} src={"http://localhost:8000/" + item.path} /></td>
								<td>{item.price}</td>
								<td>{item.description}</td>
								<td>
									<Link to={"show/" + item.id} ><span className="btn btn-primary">View</span></Link>&nbsp;&nbsp;
									<Link to={"update/" + item.id} ><span className="btn btn-warning">Edit</span></Link>&nbsp;&nbsp;
									<span onClick={() => { deleteOperation(item.id) }} className="btn btn-danger">Delete</span>

								</td>
							</tr>
						)
					}
				</tbody>
			</Table>
		</div>
		</div>
	)
}

export default ProductList