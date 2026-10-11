import { useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import CustomerTable from "../components/CustomerTable";

function Customers() {

  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("/api/customer", form);
      toast.success(res.data.message);
      setForm({ name: "", phone: "", email: "", address: "" });
    } catch (error) {
      toast.error(error.response.data.message)
    };

  };

  return (
    <Layout>
      <h4>Customers</h4>

      <div className="row mb-3">
        <form className="row mb-3" onSubmit={handleSubmit}>
          <div className="col">
            <input className="form-control" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          </div>
          <div className="col">
            <input className="form-control" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="col">
            <input className="form-control" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          </div>
          <div className="col">
            <input className="form-control" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
          </div>
          <div className="col">
            <button className="btn btn-primary w-100" type="submit">Add</button>
          </div>
        </form>
      </div>
      <CustomerTable />
    </Layout>
  );
}

export default Customers;
