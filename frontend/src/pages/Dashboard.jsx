import React from 'react';

function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.greeting}>Zdravo, Saida 👋</h1>
        <div style={styles.creditCard}>
          <span style={styles.creditLabel}>Moji krediti</span>
          <span style={styles.creditValue}>4</span>
        </div>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statBox}>
          <h3>Aktivne razmjene</h3>
          <p style={styles.statNumber}>2</p>
        </div>
        <div style={styles.statBox}>
          <h3>Sljedeći termin</h3>
          <p style={styles.statText}>15. okt. 18:00</p>
          <span style={styles.statSubText}>Matematika</span>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Preporučene vještine</h2>
        <div style={styles.recommendationCard}>
          <div>
            <h4>Emina H. <span style={styles.rating}>★ 4.8</span></h4>
            <p style={styles.subText}>Frontend Developer</p>
            <div style={styles.tags}>
              <span style={styles.tag}>React</span>
              <span style={styles.tag}>CSS</span>
              <span style={styles.tag}>JavaScript</span>
            </div>
          </div>
          <button style={styles.actionButton}>Pogledaj profil</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2.5rem 2rem',
    backgroundColor: '#f8f9f7',
    minHeight: '85vh',
    fontFamily: 'Inter, Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  greeting: {
    fontSize: '2rem',
    color: '#2C4A3E',
    fontWeight: '700',
    margin: 0
  },
  creditCard: {
    backgroundColor: '#ffffff',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    border: '1px solid #eaebe6',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
  },
  creditLabel: {
    color: '#666',
    fontSize: '0.95rem'
  },
  creditValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2C4A3E'
  },
  statsGrid: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '2.5rem',
    flexWrap: 'wrap'
  },
  statBox: {
    flex: '1',
    minWidth: '250px',
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #eaebe6',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2C4A3E',
    margin: '0.5rem 0 0 0'
  },
  statText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    margin: '0.5rem 0 0 0'
  },
  statSubText: {
    fontSize: '0.85rem',
    color: '#666'
  },
  section: {
    marginTop: '2rem'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: '#2C4A3E',
    marginBottom: '1rem'
  },
  recommendationCard: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #eaebe6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  rating: {
    color: '#f59e0b',
    fontSize: '0.9rem',
    marginLeft: '0.5rem'
  },
  subText: {
    color: '#666',
    fontSize: '0.9rem',
    margin: '0.25rem 0 0.75rem 0'
  },
  tags: {
    display: 'flex',
    gap: '0.5rem'
  },
  tag: {
    backgroundColor: '#f0f2ef',
    color: '#2C4A3E',
    padding: '0.25rem 0.75rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '500'
  },
  actionButton: {
    backgroundColor: '#2C4A3E',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

export default Dashboard;