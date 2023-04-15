const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();
app.use(cors());

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DB_PW,
  database: process.env.DATABASE,
  port: process.env.PORT,
});
// db.connect(() => {
//   if (err) {
//     console.log('Error connecting to DB');
//   } else {
//     console.log('Connected to Database');
//   }
// });
app.use(express.json());

app.get('/books', (req, res) => {
  const q = 'SELECT * FROM books';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/books', (req, res) => {
  const q = 'INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)';
  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Book has been created successfully');
  });
});
app.listen(8800, () => {
  console.log('Connected to backend!');
});
