import React from 'react';

function NamesTable({ names }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NamesTable;