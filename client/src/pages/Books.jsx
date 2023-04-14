import React, { useEffect } from 'react';
import './books.css';

const Books = () => {
  useEffect(() => {});
  return (
    <div>
      <table className="books">
        <thead className="head">
          <th className="headItem">Title</th>
          <th className="headItem">Description</th>
          <th className="headItem">Cover</th>
        </thead>
        <tbody>
          <tr className="book">
            <td className="bookDetail">Name</td>
            <td className="bookDetail">desc</td>
            <td className="bookDetail">cover</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Books;
