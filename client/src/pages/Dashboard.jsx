import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/"); //  better redirect
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome {userInfo?.name} 🎉</h2>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Dashboard;
