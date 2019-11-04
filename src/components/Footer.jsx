import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.scss';

const Header = () => {

  return (
    <Fragment>
      <footer className='d-flex flex-row footer justify-content-center'>
        <nav className='nav align-items-center mx-auto'>
          <Link className='nav-link text-white' to='#'>Home</Link>
          <Link className='nav-link text-white' to='#'>About</Link>
          <Link className='nav-link text-white' to='#'>Contact Us</Link>
          <Link className='nav-link text-white' to='#'>Login</Link>
          <Link className='nav-link text-white' to='#'>Register</Link>
        </nav>
        <div className='nav align-items-center pr-5'>
          <i className='fa fa-facebook pr-2'></i>
          <i className='fa fa-twitter pr-2'></i>
          <i className='fa fa-instagram pr-2'></i>
          <i className='fa fa-envelope pr-2'></i>  
        </div>
      </footer>
    </Fragment>
    )
}

export default Header;
