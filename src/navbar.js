import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='nav-wrapper na darken-3'>
       <div className='container'>
      	 <NavLink to='/' className='brand-logo'>Post_Reaction </NavLink>
      		<ul className='right'>
      			<li><NavLink to='/'>Home</NavLink></li>
      			<li><NavLink to='/about'>About</NavLink></li>
      			<li><NavLink to='/contact'>Contact</NavLink></li>
      		</ul>
       </div>
      </nav>
    );
  }
};

export default Navbar;