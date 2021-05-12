import React, { useState } from 'react';
import Header from './Header'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function SearchProduct() {
    const [data, setData] = useState([]);
    async function search(key) {
        if (key.length > 1) {
            let result = await fetch("http://127.0.0.1:8000/api/searchproduct/" + key);
            result = await result.json();
            // console.log(result);
            setData(result);
        }
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Product</h1><br />
                <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Serach Product" />
                <br></br>
                {
                    data.length > 0 ?
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) =>
                                      
                                            <tr>   
                                                <td>{item.id}</td>
                                             
                                                <td>{item.name}</td>
                                                <td><Link to={"show/"+item.id}><img style={{ width: 100, height: 60 }} src={"http://localhost:8000/" + item.path} /></Link> </td>
                                                <td>{item.price}</td>
                                                <td>{item.description}</td>
                                                 </tr>
                                      
                                    )
                                }
                            </tbody>
                        </Table>
                        : null
                }
            </div>
        </div>
    )
}

export default SearchProduct