import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>O nama</h1>
        <p style={styles.text}>
          <strong>SkillSwap Network</strong> je moderna platforma kreirana sa ciljem da poveže pojedince željne učenja i one koji žele podijeliti svoje vještine, znanje i iskustvo sa drugima.
        </p>
        <p style={styles.text}>
          Vjerujemo da svako ima nešto vrijedno da ponudi i da je najbolji način napredovanja kroz direktnu razmjenu znanja unutar podržavajuće zajednice. Naš tim je posvećen stvaranju jednostavnog, pristupačnog i inspirativnog okruženja za svakog korisnika.
        </p>

        <div style={styles.featuresGrid}>
          <div style={styles.featureItem}>
            <h3 style={styles.featureTitle}>Naša misija</h3>
            <p style={styles.featureText}>Demokratizacija učenja kroz razmjenu vještina bez finansijskih barijera i komplikovanih procedura.</p>
          </div>
          <div style={styles.featureItem}>
            <h3 style={styles.featureTitle}>Naša vizija</h3>
            <p style={styles.featureText}>Globalna mreža mentora i entuzijasta povezanih strašću prema stalnom razvoju i saradnji.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem 2rem',
    backgroundColor: '#f8f9f7', // Pozadina usklađena s UI-jem
    minHeight: '85vh',
    fontFamily: 'Inter, Arial, sans-serif'
  },
  card: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: '3rem 2.5rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
    border: '1px solid #eaebe6'
  },
  title: {
    fontSize: '2.5rem',
    color: '#2C4A3E', // Tamnozelena boja sa dizajna
    marginBottom: '1.5rem',
    textAlign: 'center',
    fontWeight: '700'
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: '#555555',
    marginBottom: '1.25rem'
  },
  featuresGrid: {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '2.5rem',
    flexWrap: 'wrap'
  },
  featureItem: {
    flex: '1',
    minWidth: '250px',
    backgroundColor: '#f8f9f7',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #eaebe6'
  },
  featureTitle: {
    color: '#2C4A3E',
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    fontWeight: '600'
  },
  featureText: {
    color: '#666666',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  }
};

export default About;