import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import toast from 'react-hot-toast';
import axios from 'axios';

function Reservations() {

  const [reservations, setReservations] = useState([]);
  console.log(reservations)

  useEffect(() => {
    const fetchRser = async () => {
      try {
        const res = await axios.get("/api/reservation");
        setReservations(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err.response.data)
      }
    };
    fetchRser();
  }, []);

  const [form, setForm] = useState({ customer: "", room: "", date: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/reservation", form);

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <h4>Reservations</h4>

      <div className="row mb-3">
        <form className="row" onSubmit={handleSubmit}>
          <div className="col">
            <input type="text" className="form-control" name="customer" placeholder="Customer Name" value={form.customer} onChange={handleChange} />
          </div>
          <div className="col">
            <input className="form-control" name="room" placeholder="Room No" value={form.room} onChange={handleChange} />
          </div>
          <div className="col">
            <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} />
          </div>
          <div className="col">
            <button className="btn btn-primary w-100" type="submit">Book</button>
          </div>
        </form>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>_Id</th>
            <th>Customer</th>
            <th>Room</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((data, ind) => (
            < tr key={data._id} >
              <td>{ind + 1}</td>
              <td>{data.customer?.name}</td>
              <td>{data.room?.roomNumber}</td>
              <td>{data.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout >
  );
}

export default Reservations;
