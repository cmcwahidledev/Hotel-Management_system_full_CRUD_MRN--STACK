import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";

const Register = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
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
            const res = await axios.post("/api/register", form);
            console.log(res)
            toast.success(res.data.message);
            navigate("/login");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h3 className="mb-3">Register</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control mb-2" placeholder="Name" name="username" value={form.username} onChange={handleChange} />
                        <input type="email" className="form-control mb-2" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
                        <input type="password" className="form-control mb-2" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
                        <button className="btn btn-success w-100" type="submit">Register</button>
                    </form>

                    <p className="mt-2">
                        Already have account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
