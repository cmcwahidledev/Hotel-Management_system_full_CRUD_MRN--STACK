import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/login", form);

            toast.success(res.data.message);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/dashboard")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h3 className="mb-3">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="email" className="form-control mb-2" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
                        <input type="password" className="form-control mb-2" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                    </form>

                    <p className="mt-2">
                        Don't have account? <Link to="/">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
