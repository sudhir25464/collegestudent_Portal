import React, { useEffect } from 'react'
import '../CSS/navbar.css'
import Aos from 'aos'

import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import Rules from './Rules'
function Mainservice() {

  const navigate = useNavigate();
  const login = () => {
    navigate('userlogin?');
  }

  const userRejister = () => {
    navigate('userejistration');
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])


  return (
    //  bg2 adding and change background colocr
    <>
      <div className='container-fluid  main-bg-home-page pb-5'>
        <div className='container hdh '>
          <div className='row'>
            <div className='col-md-7 col-12 col-md-7 py-lg-5 py-md-5 py-5 main-text-style ' data-aos="fade-down">
              <p className='py-2 py-md-4 py-lg-4 m-2 fs-1 mt-lg-5 mt-md-5 mt-3 p1 text-primary'>Let's Join all student , </p>
              <p className='m-2 main-sm-header-text '>Access your <span className='text-success text-bold'>course materials </span > collage updates, announcement notic, and a plethora of resources to <span className='text-red'> enhance your college experience.</span> Stay connected, informed, and organized throughout your educational journey.</p>


              <div className='mt-5 pt-lg-4 pt-md-4 mb-1 mb-lg-3 mb-md-3 responsixe-child ' data-aos="fade-right">
                <button type="button" class="btn btn-size  btn-outline-success  main-page-login-btn-bg me-2 style-btn px-5" onClick={login}>Login  </button>
                <button type="button" class="btn btn-size btn-outline-primary  style-btn px-5 btn-gap" onClick={userRejister}>Register</button>
              </div>

              {/* main-page-login-btn-bg */}
            </div>

            {/* video conatiner */}
            <div className='col-md-5 col-12 col-md-5 py-lg-5 py-md-5 py-5 '>

              <div className='home-imag-container' data-aos="fade-down">

              </div>

            </div>


          </div>
        </div>
      </div>
      <div className='container-fluid bg2'>
        <Rules />
      </div>
    </>
  )
}

export default Mainservice
