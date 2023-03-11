import React from "react";
import apiURL from "../../config";
import BluTable from "../Tables/BluTable";
import axios from "axios";
import { useEffect, useState } from "react";

const OrdersTable = (props) => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    //const token = localStorage.getItem("token");
    axios
      .get(`${apiURL}/user-order`)
      .then((res) => setDashboardData(res.data.payload))
      //.then((res) => console.log(res.data.payload))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={props.extraClass}>
      <BluTable data={dashboardData} />
    </div>
  );
};

export default OrdersTable;
