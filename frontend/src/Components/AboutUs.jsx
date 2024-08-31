import React from 'react';

const AboutUs = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          Welcome to Active Hub! We are dedicated to bringing you the latest and most engaging content.
          Our mission is to provide users with a platform where they can explore and stay updated with news,
          share their favorite content, and discover new and exciting locations.
        </p>
        <p style={styles.paragraph}>
          Our team is passionate about creating a community-driven space where users can interact,
          share their thoughts, and stay connected with the world around them.
          Whether you're here for the latest updates or to explore new interests, we're here to support you every step of the way.
        </p>
        <p style={styles.paragraph}>
          Thank you for being a part of our community. We hope you enjoy your experience at Active Hub!
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
    color: '#333', // Text color for better contrast with transparent background
    backdropFilter: 'blur(10px)', // Adds a slight blur effect behind the section
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '12px', // Rounded corners for a smoother look
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Slightly transparent container background
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for a floating effect
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#17153B', // A dark, elegant color for the heading
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    color: '#333', // Slightly darker text color for readability
  },
};

export default AboutUs;
