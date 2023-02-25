import React from "react";
import Table from "react-bootstrap/Table";

const BluTable = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {Object.keys(data[0]).map((colName, index) => (
            <th key={index}>{colName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BluTable;
