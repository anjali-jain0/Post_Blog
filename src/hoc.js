import React from 'react';

const Hoc = (WrappedComponent) => {
  
  const colours=['green','yellow','blue','red','pink','orange'];
  const ran=colours[Math.floor(Math.random()*5)];
  const className=ran + '-text';

  return (props) => {
    return (
    <div className={className}>
      <WrappedComponent  {...props} />
    </div>
  );
}
};

export default Hoc;