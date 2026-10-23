import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      {/* Glavni baner / hero sekcija */}
      <div style={styles.heroCard}>
        <h1 style={styles.title}>Dobrodošli na SkillSwap</h1>
        <p style={styles.subtitle}>
          Mjesto gdje razmjenjuješ vještine, učiš novo i dijeliš znanje sa drugima.
        </p>
        <div style={styles.buttonGroup}>
          <Link to="/register" style={styles.primaryButton}>Kreiraj račun</Link>
          <Link to="/login" style={styles.secondaryButton}>Prijavi se</Link>
        </div>
      </div>

      {/* Kartice sa mogućnostima */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Pronađi vještinu</h3>
          <p style={styles.cardText}>Pregledaj ponudu vještina koje drugi korisnici nude i nauči nešto novo.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Podijeli svoje znanje</h3>
          <p style={styles.cardText}>Postani mentor i pomozi drugima da savladaju oblasti u kojima si stručan.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem 2rem',
    backgroundColor: '#f8f9f7', // Svijetla pozadina sa slike
    minHeight: '85vh',
    fontFamily: 'Inter, Arial, sans-serif'
  },
  heroCard: {
    maxWidth: '700px',
    margin: '0 auto 3rem auto',
    backgroundColor: '#ffffff',
    padding: '3rem 2rem',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
    border: '1px solid #eaebe6'
  },
  title: {
    fontSize: '2.5rem',
    color: '#2C4A3E', // Prepoznatljiva tamnozelena boja sa UI-ja
    marginBottom: '1rem',
    fontWeight: '700'
  },
  subtitle: {
    fontSize: '1.15rem',
    color: '#555555',
    marginBottom: '2rem',
    lineHeight: '1.5'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
  },
  primaryButton: {
    backgroundColor: '#2C4A3E', // Zeleno dugme
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(44, 74, 62, 0.2)'
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    color: '#2C4A3E',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    border: '2px solid #2C4A3E'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    maxWidth: '900px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #eaebe6',
    padding: '2rem',
    borderRadius: '12px',
    width: '320px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
  },
  cardTitle: {
    color: '#2C4A3E',
    fontSize: '1.25rem',
    marginBottom: '0.75rem'
  },
  cardText: {
    color: '#666666',
    fontSize: '0.95rem',
    lineHeight: '1.4'
  }
};

export default Home;