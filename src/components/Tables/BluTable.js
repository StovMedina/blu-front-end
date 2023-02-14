import React from "react";
import Table from "react-bootstrap/Table";

function BluTable(data) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {data.map((columns, index) => (
            <th key={index}>{columns.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.}</td>
            </tr>
          ))}
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BluTable;
