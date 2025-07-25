import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>About NeighbourMart 🛍️</h1>

        <p style={styles.text}>
          <strong>NeighbourMart</strong> is a community-driven platform that makes local group ordering easy,
          efficient, and social. Whether you're buying groceries, dairy products, or household goods, NeighbourMart
          helps neighbors join forces to meet minimum order values and save on delivery charges.
        </p>

        <p style={styles.text}>
          Our mission is to simplify shared shopping experiences and empower local communities to shop smarter,
          together. With user-friendly group creation, real-time joining, and item tracking – NeighbourMart is your
          go-to solution for daily essentials.
        </p>

        <hr style={styles.hr} />

        <h3 style={styles.subHeading}>📞 Contact Information</h3>
        <ul style={styles.contactList}>
          <li style={styles.contactItem}>📱 Phone 1: <strong style={styles.bold}>+91 9508998036</strong></li>
          <li style={styles.contactItem}>📱 Phone 2: <strong style={styles.bold}>+91 7667033917</strong></li>
          <li style={styles.contactItem}>✉️ Email: <strong style={styles.bold}>neighbourmart.app@gmail.com</strong></li>
        </ul>

        <hr style={styles.hr} />
      </div>
    </div>
  );
};

// 🎨 Styles (inline CSS for hover-friendly enhancements)
const styles = {
  page: {
    padding: '40px 20px',
    background: 'linear-gradient(to right, #f0f4f7, #e8f5e9)',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif'
  },
  card: {
    maxWidth: '850px',
    margin: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease-in-out',
    ':hover': {
      transform: 'scale(1.01)'
    }
  },
  heading: {
    textAlign: 'center',
    color: '#2e7d32',
    marginBottom: '25px',
    fontSize: '32px',
    fontWeight: 'bold',
    textShadow: '1px 1px 3px rgba(0,0,0,0.05)'
  },
  subHeading: {
    color: '#2e7d32',
    marginTop: '25px',
    fontSize: '22px'
  },
  text: {
    fontSize: '16.5px',
    lineHeight: '1.8',
    color: '#333',
    marginBottom: '10px'
  },
  contactList: {
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: '16px',
    color: '#444',
    lineHeight: '2'
  },
  contactItem: {
    transition: 'color 0.3s',
    cursor: 'default'
  },
  bold: {
    fontWeight: 'bold',
    color: '#1b5e20'
  },
  projectList: {
    paddingLeft: '20px',
    color: '#444',
    fontSize: '16px',
    lineHeight: '2'
  },
  hr: {
    margin: '30px 0',
    borderColor: '#ddd'
  },
  quote: {
    fontStyle: 'italic',
    marginTop: '25px',
    fontSize: '15.5px',
    textAlign: 'center',
    color: '#777'
  }
};

export default AboutUs;
