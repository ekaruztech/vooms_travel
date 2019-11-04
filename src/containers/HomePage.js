import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/containers/HomePage.scss';
import Logo from '../assets/images/logo.svg';
import ImageLeft from '../assets/images/left.png';

const Homepage = () => {
  return (
    <Fragment>
      <Header logo={Logo}/>
      <div className='position-absolute-mid'>
        <img src={ImageLeft} className='image_left d-none d-md-block'/>
      </div>
      <div className='container mt-5 text-center'>
        <div className='row'>
          <div className='col-12'>
            <h1>Transportation in Africa!</h1>
          </div>
          <div className='col-12 medium-text'>
            Travel with our parthers.
          </div>
        </div>

        <div className='row cards-row justify-content-md-center'>
          <div className='col-3'>
            <div className='card company-cards'>
              <div className='card-header bg-white px-0 text-left border-bottom-0'>
                <i className='fa fa-share-alt font-icons ml-2 text-muted'></i>
                <div id='discount-topright'></div>
              </div>
              <div className='card-body'>
                <h5 className='card-title text-center text-muted font-italic'>Logo type</h5>
                <h6 class='card-subtitle mb-2 mt-4 font-weight-bold'>Card subtitle</h6>
                  <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='card company-cards'>
              <div className='card-header bg-white px-0 text-left border-bottom-0'>
                <i className='fa fa-share-alt font-icons ml-2 text-muted'></i>
                <div id='discount-topright'></div>
              </div>
              <div className='card-body'>
                <h5 className='card-title text-center text-muted font-italic'>Logo type</h5>
                <h6 class='card-subtitle mb-2 mt-4 font-weight-bold'>Card subtitle</h6>
                  <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Homepage;
