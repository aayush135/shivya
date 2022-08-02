import React from "react";
import Protected from "../../components/Protected.jsx";

const Dashboard = () => {
  return (
    <Protected>
      <div className="app">
      <header>Dashboard</header>
      <main className="main">
      <h3>Content</h3> 
      <div className="card">
        <h4>Traffic</h4>
      </div>

      </main>
      </div>
    </Protected>
  );
};

export default Dashboard;