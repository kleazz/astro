import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to My App</h1>
      <p>This is the home page of the application.</p>
      <p>Feel free to explore and learn more about what we offer!</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Home;