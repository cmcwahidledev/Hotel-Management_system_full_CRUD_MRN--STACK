import { useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";

const Rooms = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get("/api/room")
            .then(res => setRooms(res.data))
    }, []);

    const [form, setForm] = useState({
        roomNumber: "",
        roomType: "",
        price: "",
        status: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/room", form);

            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <Layout>
            <h4>Rooms</h4>

            {/* FORM */}
            <div className="row mb-3">
                <form className="row mb-3" onSubmit={handleSubmit}>
                    <div className="col">
                        <input className="form-control" type="number" name="roomNumber" placeholder="Room No" value={form.roomNumber} onChange={handleChange} />
                    </div>
                    <div className="col">
                        <select className="form-control" name="roomType" value={form.roomType} onChange={handleChange}>
                            <option value="">Type</option>
                            <option>Single</option>
                            <option>Double</option>
                            <option>suit</option>
                            <option>family</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control" name="price" value={form.price} onChange={handleChange}>
                            <option value="">price</option>
                            <option>50</option>
                            <option>100</option>
                            <option>150</option>
                            <option>200</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control" name="status" value={form.status} onChange={handleChange}>
                            <option value="">Status</option>
                            <option>Available</option>
                            <option>Booked</option>
                        </select>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary w-100" type="submit">Add</button>
                    </div>
                </form>
            </div>

            {/* TABLE */}
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>_Id</th>
                        <th>RoomNum</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((data) => (
                        <tr key={data._id}>
                            <td>{data._id}</td>
                            <td>{data.roomNumber}</td>
                            <td>{data.roomType}</td>
                            <td>{data.price}</td>
                            <td>
                                <span className={`badge ${data.status === "Available" ? "bg-success" : "bg-warning"}`}>
                                    {data.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}

export default Rooms;
