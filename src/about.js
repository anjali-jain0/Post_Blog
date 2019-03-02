import React from 'react';
import Hoc from './hoc.js';

class About extends React.Component {
  render() {
    return (
      <div className='container'>
        <h4 className='center'>About</h4>
        <p>This is the About page</p>
      </div>

    );
  }
};

export default Hoc(About);