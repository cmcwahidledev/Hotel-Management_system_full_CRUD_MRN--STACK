import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }
    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <span className="navbar-brand">Serene Sarover Hotel</span>
            <button onClick={navigateLogin} className="btn btn-danger btn-sm">Logout</button>
        </nav>
    );
}

export default Navbar;
