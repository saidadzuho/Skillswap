require('dotenv').config();
const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

// Test: da li server komunicira s bazom
app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS ok');
    res.json({ poruka: 'Konekcija s bazom radi', rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ greska: err.message });
  }
});

// Čitanje iz tabele korisnik
app.get('/api/korisnici', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT user_id, ime, prezime, email FROM korisnik'
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ greska: err.message });
  }
});

app.listen(process.env.PORT, async () => {
  try {
    await pool.query('SELECT 1');
    console.log(`Server radi na portu ${process.env.PORT}, MySQL konekcija OK`);
  } catch (err) {
    console.error('Greška pri spajanju na MySQL:', err.message);
  }
});