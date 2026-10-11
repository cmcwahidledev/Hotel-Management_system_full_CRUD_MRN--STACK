import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import CustomerTable from "../components/CustomerTable";

const Dashboard = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-0">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 p-4">
                        <DashboardCards />
                        <CustomerTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard