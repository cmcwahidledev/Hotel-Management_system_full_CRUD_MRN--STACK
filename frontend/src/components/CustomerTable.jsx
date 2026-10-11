import axios from "axios";
import { useState, useEffect } from "react";

const CustomerTable = () => {

    const [customer, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("/api/customer")
            .then(res => setCustomers(res.data))
    }, []);
    return (
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="mb-3">Customer</h5>

                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>_Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customer.map((data, index) => (
                            <tr key={data._id}>
                                <td>{data._id}</td>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default CustomerTable