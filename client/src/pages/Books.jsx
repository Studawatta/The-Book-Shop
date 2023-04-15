import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './books.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8800/books');
      setBooks(res.data);
      console.log(res.data);
    };
    fetchBooks();
  }, []);
  return (
    <div className="container">
      <div className="header">
        <div
          className="headerItem"
          style={{ borderRight: '2px solid white' }}
        >
          {' '}
          Title
        </div>
        <div
          className="headerItem"
          style={{ borderRight: '2px solid white' }}
        >
          Description
        </div>
        <div className="headerItem">Cover</div>
      </div>
      <div className="body">
        {books.map((B) => {
          return (
            <div className="row">
              <div
                className="rowItem"
                style={{ borderRight: '2px solid white' }}
              >
                {' '}
                {B.title}
              </div>
              <div
                className="rowItem"
                style={{ borderRight: '2px solid white' }}
              >
                {B.desc}
              </div>
              <div className="rowItem">{B.cover}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
