import React from 'react';

const Foot = () => {
  return (
    <footer >
      <div style={styles.line}>

      <p style={styles.text}>© 2024 <strong>Vishwa Udayntha</strong>. All rights reserved.</p>
      </div>
      

    </footer>
  );
};

const styles = {
  line: {
    borderTop: '2px solid #fff', // Adjust line color and thickness as needed
    width: '90%', // Adjust line width as needed
    margin: '0 auto 10px', // Center the line horizontally and add space below
  },
  text: {
    margin: '0 auto', // Center the text horizontally
    marginTop: '10px', // Add space above the text
    textShadow: '2px 2px 4px rgba(0,0,0,10)'
  },
  
};

export default Foot;
