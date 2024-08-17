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
    padding: '2rem',
    backgroundColor: '#fff', // Background color changed to black
    color: '#000', // Text color changed to white for better contrast
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#000', // Heading color changed to white
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
    color: '#17153B', // Paragraph color changed to a lighter gray for readability
  },
};

export default AboutUs;
