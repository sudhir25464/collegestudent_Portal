import React from 'react'
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
function Userprofiledata() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the token to get user information
      const decodedUser = jwtDecode(token);
      setUserData(decodedUser);
    }
  }, []);

  const formatIndianDate = (dateString) => {
    const options = { timeZone: 'Asia/Kolkata' };
    return new Date(dateString).toLocaleString('en-IN', options);
  };
  return (
  

    <>

      <div className='container-fluid'>
        <div className='container'>
          <div className='row  mt-5 mb-4'>
            <div className=''>

              <div className='main-user-profile-container bg-light shadow  border p-4'>

                {userData && (
                  <div className="p-0 align-items-center m-0" data-aos="fade-down">
                    <div className='row'>
                      <div className='col-12 col-md-8 col-lg-8 px-5 bg-light user-profile-data-style'>


                        <p className=''> <label>ID : </label>  {userData.collegeId}</p>
                        <p className="text-dark "><label>Name : </label> {userData.fullName}</p>
                        <p className=""> <label>Father's Name : </label> {userData.fathersName}</p>
                        <p className="text-dark"><label>Email : </label> {userData.email}</p>
                        <p> <label>Contact : </label> {userData.contact}</p>
                        <p> <label>Gender : </label>{userData.gender}</p>
                        <p> <label>course : </label>{userData.course}</p>
                        <p><label> DOB : </label>{userData.dob}</p>
                        <p> <label>Addrees : </label> {userData.address}</p>
                        {/* Add more elements if needed */}

                      </div>


                      <div className='col-12 col-md-4 col-lg-4 bg-light'>
                        <div className='user-image-container'></div>
                        <p className='text-center'> User : {userData.fullName}</p>

                        <p className='text-center'>Active: {formatIndianDate(userData.createdAt)}</p>


                      </div>
                    </div>


                  </div>



                )}
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userprofiledata
