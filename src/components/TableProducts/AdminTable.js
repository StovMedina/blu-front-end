import React from "react";
import apiURL from "../../config";
import BluTable from "../Tables/BluTable";
import axios from "axios";
import { useEffect, useState } from "react";

const AdminTable = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .get(`${apiURL}/users`, {
        headers: { authorization: token },
      })
      .then((res) => setDashboardData(res.data.payload))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <BluTable data={dashboardData} />
    </div>
  );
};

export default AdminTable;
