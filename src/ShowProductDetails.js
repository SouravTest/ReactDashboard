import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom'
import Header from './Header'
import { Table } from 'react-bootstrap'
function ShowProductDetails(props) {
    let pid = props.match.params.id;
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [image, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        getData()
    }, [])



    async function getData() {
        let result = await fetch("http://127.0.0.1:8000/api/showproductdetails/" + pid);
        result = await result.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
        setFile(result.file);
    }

    return (
        <div className="conatiner">
            <div className="row">
                <Header />
                <h1>ShowProductDetails Page</h1><br /><br /><br />
                <Link to={"/"}> <span className="btn btn-warning btn-sm">Back</span></Link><br />
                <div className="col-sm-6 offset-sm-1">
                    <Table striped bordered hover >
                        <tbody>
                            <tr>
                                <td>  <label>NAME : </label></td>
                                <td>   {data.name} </td>
                            </tr>
                            <tr>
                                <td> <label>PRICE : </label>  </td>
                                <td>   {data.price} </td></tr>
                            <tr>
                                <td> <label>DESCRIPTION : </label> </td>
                                <td>   {data.description} </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="col-sm-2 offset-sm-1 p-5">
                    <p>Image</p>
                    <img width={350} src={"http://127.0.0.1:8000/" + data.path} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(ShowProductDetails)