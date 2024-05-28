import React from 'react'
import '../CSS/navbar.css'
import { Link,json,useNavigate } from 'react-router-dom';



function AdminNavbar() {

 // const navigate = useNavigate();
  // const auth = localStorage.getItem('user');
  //  const logout =()=>{
  //       localStorage.clear();
  //      navigate('/')
  //     }


    
  return (
   <>


<div className='bg1'>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-primary p-3 p-lg-4 p-md-3 " aria-label="Offcanvas navbar large">
              <div className="container">
                <div className="navbar-brand cf">Admin Dashbord</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                  <span className="navbar-toggler-icon "></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbar2Label"></h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1  pe-3">
                    <li className="nav-item">
                          <Link to='/adminpage' className="nav-link active " aria-current="page">Dashbord</Link>
                       </li>
                       <li className="nav-item">
                          <Link to='' className="nav-link active " aria-current="page">Student</Link>
                       </li>
                       <li className="nav-item">
                          <Link to='adminpost' className="nav-link active " aria-current="page">Post</Link>
                       </li>
                       <div class="btn-group">
                      
                      
  <li type="button" class=" nav-link active dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Posts
  </li>
  <div class="dropdown-menu mt-5 ">
    <Link to='newupdates' class="dropdown-item" >Updates</Link>
    <Link class="dropdown-item" href="#">Education Blog</Link>
    <Link class="dropdown-item" href="#">E-Learning</Link>
    <div class="dropdown-divider"></div>
    <Link class="dropdown-item" href="#">Separated link</Link>
  </div>
</div>


                       <li className="nav-item">
                          <Link to='newanouncement' className="nav-link active " aria-current="page">Announced</Link>
                       </li>
                      
                      
                      <li className='nav-item'>
                      <Link className='nav-link'   >Logout</Link>  
                       </li>
                    </ul>


                  </div>
                </div>
              </div>
            </nav>
          </div>
   
  


   </>
  )
}

export default AdminNavbar
