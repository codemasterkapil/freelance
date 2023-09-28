import Subject from "./subject";
import "./dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard_container_oustside">
            <div className="dashboard">
                <div className="dashboard_container">
                    <div className="dashboard_left">

                    </div>
                    <div className="dashboard_right_container">
                        <div className="dashboard_right">
                            <Subject />
                            <Subject />
                            <Subject />
                            <Subject />
                        </div>
                        <button>Start studying {">"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;