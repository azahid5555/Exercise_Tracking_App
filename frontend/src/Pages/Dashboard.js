import React from "react";
import Dashaside from "../Components/Dashaside";
import Dashmain from "../Components/Dashmain";

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <Dashaside />
        <Dashmain />
      </div>
    </>
  );
};

export default Dashboard;
