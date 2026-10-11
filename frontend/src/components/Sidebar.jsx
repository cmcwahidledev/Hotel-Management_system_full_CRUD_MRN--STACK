import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-light vh-100 p-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/rooms">Rooms</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/reservations">Reservations</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/customers">Customers</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
