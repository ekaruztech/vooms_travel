import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';
import ImageRight from '../assets/images/right.png';

const Header = ({logo, ...rest}) => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark text-primary'>
        <div className='position-absolute'>
          <img src={ImageRight} className='image_right d-none d-md-block'/>
        </div>
        <div className='container-fluid'>
          <Link className='navbar-brand mt-2 mb-2 ml-5' to='/'><img src={logo} /></Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link className='nav-link text-white' to='#'>Home <span className='sr-only'>(current)</span></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='#'>About</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='#'>Contact Us</Link>
              </li>
              <li className='nav-item ml-md-5'>
                <Link className='nav-link btn text-center border login-nav' to='#'>Login</Link>
              </li>
              <li className='nav-item mr-md-5'>
                <Link className='nav-link btn text-center border signup-nav' to='#'>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
