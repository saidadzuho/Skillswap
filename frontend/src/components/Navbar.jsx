import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>SkillSwap</h2>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Dobrodošli</Link></li>
        <li><Link to="/home" style={styles.link}>Početna</Link></li>
        <li><Link to="/dashboard" style={styles.link}>Kontrolna tabla</Link></li>
        <li><Link to="/profile" style={styles.link}>Profil</Link></li>
        <li><Link to="/about" style={styles.link}>O nama</Link></li>
        <li><Link to="/login" style={styles.link}>Prijava</Link></li>
        <li><Link to="/register" style={styles.link}>Registracija</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2C4A3E', // Tamnozelena boja sa dizajna
    color: '#fff',
    fontFamily: 'Inter, Arial, sans-serif',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffffff'
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.25rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem'
  }
};

export default Navbar;