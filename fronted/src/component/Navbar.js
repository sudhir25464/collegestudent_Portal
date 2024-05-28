import React from 'react'
//import jwt from'jsonwebtoken'
import '../CSS/navbar.css'
//const path = require('path');
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import navlogo from '../Images/c-small-icon.jpeg'
function Navbar() {

    // model
    const formatIndianDate = (dateString) => {
        const options = { timeZone: 'Asia/Kolkata' };
        return new Date(dateString).toLocaleString('en-IN', options);
    };
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    // this is for user
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            // Decode the token to get user information
            const decodedUser = jwtDecode(token);
            setUserData(decodedUser);
        }
    }, []);

    // this is for admin
    const [adminData, setadminData] = useState(null);

    useEffect(() => {
        const token1 = localStorage.getItem('Admintoken');

        if (token1) {
            // Decode the token to get user information
            const decodedUser = jwtDecode(token1);
            setadminData(decodedUser);
        }
    }, []);

    const location = useLocation();


    const navigate = useNavigate();

    const isUserSignIn = !!localStorage.getItem('token')



    const isAdminLogin = !!localStorage.getItem('Admintoken')


    const handleadminLogout = () => {

        localStorage.removeItem('Admintoken')
        navigate('/')
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }


    return (
        <>
            <div className='bg1 sticky'>
                <nav className="navbar navbar-expand-lg navbar-light p-2 p-lg-2 p-md-2  " aria-label="Offcanvas navbar large">
                    <div className="container">
                        <div className="navbar-brand text-light cf col-6">
                            {
                                isAdminLogin ? (


                                    <>
                                        {/* <img src='' ></img> Admin Pannel */}

                                        {adminData && (
                                            <div className="d-flex align-items-center">
                                                <span className=" me-2 nav-dynamic-user-text  p-1"> ID - {adminData.email}</span>
                                                {/* Add more elements if needed */}
                                            </div>
                                        )}
                                    </>

                                ) : (
                                    <> <img className='navlogo' src={navlogo}></img> Student Portal</>
                                )
                            }

                        </div>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>


                        <div class="collapse navbar-collapse adjust-navbar" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 text-light mb-lg-0">


                                {


                                    isUserSignIn ? (
                                        <>
                                            <li className="nav-item">
                                                <Link to='details' className="nav-link active text-light " aria-current="page">Dashbord</Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to='userupdate' className="nav-link active text-light " aria-current="page">Updates</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='e-leringbord' className="nav-link active text-light " aria-current="page">E-book</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='helpstudentprofile' className="nav-link active text-light " aria-current="page">GetHelp</Link>
                                            </li>

                                            <li className="nav-link">

                                            </li>
                                            {userData && (
                                                <div className="d-flex align-items-center">
                                                    <span className="text-dark me-2 fw-bold ">{userData.collegeId}</span>
                                                    {/* Add more elements if needed */}
                                                </div>
                                            )}
                                            <div class="dropdown">
                                                <button className="btn text-primary dropdown-toggle shadow-none fs-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {/* <i class="bi bi-person-circle"></i> */}
                                                    <i class="bi bi-person-bounding-box"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-style p-1" aria-labelledby="dropdownMenuButton">
                                                    <button onClick={handleLogout} className="dropdown-item sfhs logout-ntn  mb-1 " aria-current="page">LogOut</button>

                                                    <Link to='data' className="dropdown-item  logout-ntn sfhs " aria-current="page">Profile</Link>

                                                </div>
                                            </div>



                                        </>
                                    ) :

                                        isAdminLogin ? (
                                            <>
                                                <li className="nav-item">
                                                    <Link to='auth/api/admindashpage' className="nav-link text-light active " aria-current="page">Dashbord</Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to='adminpost' className="nav-link active " aria-current="page">ManagePost</Link>
                                                </li>
                                                <div className="btn-group">


                                                    <li type="button" className=" nav-link active dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Posts
                                                    </li>
                                                    <div className="dropdown-menu mt-0 ">
                                                        <Link to='newupdates' className="dropdown-item" >Updates</Link>
                                                        <Link to='auth/api/addcourse-metrialEbook' className="dropdown-item" href="#">E-books</Link>
                                                        <Link to='auth/api/addstudentProfile-manage-details' className="dropdown-item" >Student Profile</Link>
                                                        <Link to='auth/api/glarry' className='dropdown-item' >Glarry</Link>
                                                        <div className="dropdown-divider"></div>
                                                        <Link className="dropdown-item" href="#">Separated link</Link>
                                                    </div>
                                                </div>


                                                <li className="nav-item">
                                                    <Link to='newanouncement' className="nav-link active " aria-current="page">Announced</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='secutitylogin?' className="nav-link active me-0 " aria-current="page">Setting</Link>
                                                </li>


                                                {/* <li className='nav-item'>
                                                    <button className='nav-link auth-logout-btn px-2' onClick={handleadminLogout} >Logout</button>
                                                </li> */}

                                                <div class="dropdown">
                                                    <button className="btn text-primary dropdown-toggle shadow-none fs-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        {/* <i class="bi bi-person-circle"></i> */}
                                                        <i class="bi bi-person-circle "></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-style p-1" aria-labelledby="dropdownMenuButton">
                                                        <button onClick={handleadminLogout} className="dropdown-item sfhs logout-ntn  mb-1 " aria-current="page">LogOut</button>

                                                        <button className="dropdown-item  logout-ntn sfhs " onClick={handleShow} aria-current="page">Profile</button>

                                                    </div>
                                                </div>
                                            </>
                                        )
                                            : (

                                                <>
                                                    <li className="nav-item">
                                                        <Link to='/' className="nav-link active  " aria-current="page"> <i className="bi bi-house-door-fill me-1"></i>Home</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to='about' className="nav-link active  " ><i class="bi bi-file-earmark-text me-1"></i>About</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to='contactus' className="nav-link active " > <i className="bi bi-envelope me-1"></i>Contact</Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to='/glarryphotoes' className={`nav-link ${location.pathname === '/glarryphotoes' ? 'active-text-white' : ''}`}> <i className="bi bi-images me-1"></i> Gallery</Link>
                                                    </li>


                                                    <li className='nav-item"'>

                                                        <Link className=' nav-link text-light' to='adminlogin'> <i className="bi bi-person-check me-1"></i>admin</Link>


                                                    </li>

                                                </>
                                            )
                                }




                            </ul>
                            <div className="d-flex " >


                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                </nav>
            </div>

            <Modal show={showModal} onHide={handleClose} size="xl" className="modal-fullscreen-xxl-down">
                <Modal.Header closeButton>
                    <Modal.Title>My profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        adminData && (
                            <div className='px-5 show-profile-cont sfhs'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <p> <label> Name :</label>{adminData.name}</p>
                                        <p> <label>Emial : </label>{adminData.email}</p>
                                        <p><label>Contact : </label>{adminData.contact}</p>
                                        <p> <label>Role :</label>{adminData.role}</p>
                                        <p> <label>Active:</label> {formatIndianDate(adminData.timestamps)}</p>
                                    </div>
                                    <div className='col-md-4  pt-0'>
                                        {/* <div className='user-image-container'>   </div>*/}


                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div>




                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='px-5' variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Navbar
