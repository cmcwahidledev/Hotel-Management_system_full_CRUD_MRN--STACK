const DashboardCards = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                        <h5>Total Rooms</h5>
                        <h3>45</h3>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                        <h5>Available</h5>
                        <h3>30</h3>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card text-white bg-warning mb-3">
                    <div className="card-body">
                        <h5>Booked</h5>
                        <h3>15</h3>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card text-white bg-danger mb-3">
                    <div className="card-body">
                        <h5>Customers</h5>
                        <h3>120</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards