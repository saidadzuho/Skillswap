import React from 'react';

function Profile() {
  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <div style={styles.avatarPlaceholder}>S</div>
        <h1 style={styles.name}>Saida Džuho</h1>
        <p style={styles.role}>UI/UX Designer • <span style={styles.rating}>★ 4.8 (24 ocjene)</span></p>

        <div style={styles.sectionBlock}>
          <h3 style={styles.blockTitle}>Nudim</h3>
          <div style={styles.tags}>
            <span style={styles.tag}>Figma</span>
            <span style={styles.tag}>UI Design</span>
            <span style={styles.tag}>Git</span>
          </div>
        </div>

        <div style={styles.sectionBlock}>
          <h3 style={styles.blockTitle}>Želim naučiti</h3>
          <div style={styles.tags}>
            <span style={styles.tagSecondary}>React</span>
            <span style={styles.tagSecondary}>Node.js</span>
          </div>
        </div>

        <div style={styles.sectionBlock}>
          <h3 style={styles.blockTitle}>O meni</h3>
          <p style={styles.bio}>
            Volim dizajn, tehnologiju i učenje. U slobodno vrijeme se bavim fotografijom i uživam u novim izazovima.
          </p>
        </div>

        <button style={styles.editButton}>Uredi profil</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2.5rem 2rem',
    backgroundColor: '#f8f9f7',
    minHeight: '85vh',
    fontFamily: 'Inter, Arial, sans-serif'
  },
  profileCard: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '16px',
    border: '1px solid #eaebe6',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
  },
  avatarPlaceholder: {
    width: '90px',
    height: '90px',
    backgroundColor: '#2C4A3E',
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: '700',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto'
  },
  name: {
    fontSize: '1.8rem',
    color: '#2C4A3E',
    margin: '0 0 0.5rem 0'
  },
  role: {
    color: '#666',
    fontSize: '1rem',
    marginBottom: '2rem'
  },
  rating: {
    color: '#f59e0b',
    fontWeight: '600'
  },
  sectionBlock: {
    textAlign: 'left',
    marginBottom: '1.5rem'
  },
  blockTitle: {
    fontSize: '1.1rem',
    color: '#2C4A3E',
    marginBottom: '0.75rem',
    fontWeight: '600'
  },
  tags: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  tag: {
    backgroundColor: '#2C4A3E',
    color: '#fff',
    padding: '0.35rem 0.85rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  tagSecondary: {
    backgroundColor: '#f0f2ef',
    color: '#2C4A3E',
    padding: '0.35rem 0.85rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  bio: {
    color: '#555',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },
  editButton: {
    width: '100%',
    marginTop: '1.5rem',
    backgroundColor: '#2C4A3E',
    color: '#fff',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer'
  }
};

export default Profile;