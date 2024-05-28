import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
function StudentPost() {


  const [pdfDetails, setPdfDetails] = useState([]);

  const API_BASE_URL = 'http://localhost:8000/uploadspdf';


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getpdgbookdetails');
      setPdfDetails(response.data.data);
    } catch (error) {
      console.error('Error fetching PDF details:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // start delete data from db api intregration

  const deletebooks = async (id) => {

    // const data = await axios.delete('/deletebook/' + id)
    // if (data.data.success) {

    //   fetchData()

    //   alert(data.data.message)
    // }

    
    try {

      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        const response = await axios.delete('/deletebook/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'
          });
          fetchData();
        } else {
          // Use SweetAlert for failure
          Swal.fire({
            title: 'Error!',
            text: response.data.message,
            icon: 'error'
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle cancellation
        Swal.fire({
          title: 'Cancelled',
          text: 'Your deletion was cancelled',
          icon: 'info'
        });
      }
    } catch (error) {
      // Use SweetAlert for unexpected errors
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred. Please try again later.',
        icon: 'error'
      });
    };


  }

  // bellow glarrey api integration


  const [glarryDetailslist, setglarrylist] = useState([]);

  // const API_BASE_URL = 'http://localhost:8000/uploads';


  const fetchData1 = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getglarrydata');
      setglarrylist(response.data.data);
    } catch (error) {
      console.error('Error fetching PDF details:', error);
    }
  };
  useEffect(() => {
    fetchData1();
  }, []);

  // delete glarry data

  const deletehandler = async (id) => {

    // try {

    //   const responce = await axios.delete('/deleteglarry/' + id)
    //   if (responce.data.success) {
    //     fetchData1()
    //     alert(responce.data.message);
    //   }
    // } catch (error) {

    //   alert(error);

    // }
    
    try {

      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        const response = await axios.delete('/deleteglarry/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'
          });
          fetchData1();
        } else {
          // Use SweetAlert for failure
          Swal.fire({
            title: 'Error!',
            text: response.data.message,
            icon: 'error'
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle cancellation
        Swal.fire({
          title: 'Cancelled',
          text: 'Your deletion was cancelled',
          icon: 'info'
        });
      }
    } catch (error) {
      // Use SweetAlert for unexpected errors
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred. Please try again later.',
        icon: 'error'
      });
    };

  }

  // student profile itegration
  const [authstudentList, setauthstudentList] = useState([])
  const fetchprofileData = async () => {
    try {
      const response = await axios.get('/getauthstudentprofile');

      if (response.data.success) {
        setauthstudentList(response.data.data);
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      if (error.message === 'Network Error') {
        console.log('Network Error. Please check your internet connection.');
      } else if (error.response) {
        console.log('Server responded with an error:', error.response.data);
        console.log('Status code:', error.response.status);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  useEffect(() => {

    fetchprofileData();
  }, []);


  // delete student profile data
  const deleteprofilehandler = async (id) => {

    //    try {
    //     const responce = await axios.delete('/deletestudentprofile/' +id )

    //     if(responce.data.success){
    //         fetchprofileData();
    //         alert(responce.data.message)
    //     }
    //    } catch (error) {

    //     alert(error);
    //     console.log(error);
    //    }
    try {

      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        const response = await axios.delete('/deletestudentprofile/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'
          });
          fetchprofileData();
        } else {
          // Use SweetAlert for failure
          Swal.fire({
            title: 'Error!',
            text: response.data.message,
            icon: 'error'
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle cancellation
        Swal.fire({
          title: 'Cancelled',
          text: 'Your deletion was cancelled',
          icon: 'info'
        });
      }
    } catch (error) {
      // Use SweetAlert for unexpected errors
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred. Please try again later.',
        icon: 'error'
      });
    };


  }


  return (
    <>

      <div className='section-1'>
        <div className='conatiner-fluid bg-light'>
          <div className='p-4'>
            <div className='row'>
              <div className='col bg-light shadow-normal'>
                <button className='btn border shadow-none pull-right me-2 filter-button'> Books</button>

                <button className='btn border shadow-none pull-right me-2 filter-button'> Gallery</button> 
                <button className='btn border shadow-none pull-right me-2 filter-button'>Student profile</button>  
                
                        
              
                <button className='btn border shadow-none pull-right me-5 filter-main px-4'> Filter</button>


               


              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='p-4  mb-0'>
      <p className='sfhs fw-bold fs-4 mt-4  post-headline-style'>Available Books</p>

        <div className='row'>




          {
            pdfDetails[0] ? (

              pdfDetails.map((pdf, index) => (
                <div className='col-md-4 col-lg-4 shadow mb-3 p-2 sfhs'>
                  <p className='fs-4 mfhs'>{pdf.subjectName}</p>
                  <p>{pdf.topicName}</p>
                  <p>{pdf.courseDetails}</p>
                  <p>
                    <a href={`http://localhost:8000${pdf.pdfbook}`} download={`pdf${index + 1}.pdf`} >downloadURL</a>
                  </p>
                  <span class="badge badge-primary pull-right me-2" onClick={() => deletebooks(pdf._id)}><i class="bi bi-trash"></i>Delete</span>

                </div>
              ))
            ) : (
              <p>Book record not found</p>
            )

          }



          <div>

          </div>
        </div>
      </div>

      {/* start glarrey section  */}

      <div className='p-5 mb-0'>
      <p className='mfhs  fs-3 fw-bold  post-headline-style'>Available glarrey </p>

        <div className='row upload-image-conatiner pb-4 pt03'>


          {
            glarryDetailslist[0] ? (

              glarryDetailslist.map((e1, index) => (
                <div className='col-md-4 col-lg-4 upload-g-inner p-1 mb-2  shadow'>
                  <div className='m-0'>
                    <div className='bg-img'>
                      <img width="100%" height="220px" border-radius="10px" src={`http://localhost:8000/${e1?.image}`} />
                    </div>


                    <p className='mt-1 p-2'>{e1.aboutpost}</p>
                  </div>

                  <span class="badge badge-primary pull-right me-2" onClick={() => deletehandler(e1._id)}>Delete</span>

                </div>
              ))
            ) : (
              <p>Fetching  data  not found</p>
            )

          }

        </div>
      </div>

      {/* startprofile intergration data */}


      {/* Get student profile section */}
      <div className='container-fluid bg-light pt-3'>
        <p className='mfhs  fs-3 fw-bold p-2 post-headline-style'>Student profile</p>
        {/* <div className='get-student-profile-cont'> */}



        <div className='row'>


          {
            authstudentList[0] ? (

              authstudentList.map((e, index) => {
                return (

                  <div className='col-md-4  col-lg-4  mb-2' key={index} >
                    <div className='auth-profile-inner-card shadow-lg p-1 mb-5 bg-body rounded'>
                      <div className='img-profile-cont'>
                        <img className='img-profile' width="140px" src={`http://localhost:8000/${e?.image}`} />
                      </div>
                      <div className='auth-profile-text-cont p-3 mb-3'>
                        <p className='a-sp-txt'>{e.name}</p>
                        <p className='min-text'>Role : {e.jobRole}</p>
                        <p className='min-text p-0'><i class="bi bi-geo-alt-fill"></i> {e.distric}</p>
                        <div className='row'>
                          <div className='col-6 '>

                            <Link className='n-text' to={e.setLinkdin}><i class="bi bi-linkedin me-1"></i>Linkdin</Link>
                            <p>
                              <i className="bi bi-whatsapp me-1 text-primary pt-1 n-text">{e.setWattsp}</i>

                            </p>
                            <p>
                             {e.setEmail}

                            </p>


                          </div>
                          <div className='col-6'>
                            <p>{e.courseDetails}</p>
                            <p>{e.coursesession}</p>
                          </div>
                        </div>




                        <p>{e.studentDesc}</p>


                        <span type="button" class="badge badge-primary shadow-none pull-right me-2" onClick={() => deleteprofilehandler(e._id)}><i class="bi bi-trash"></i>delete</span>


                      </div>

                    </div>
                  </div>
                )
              })
            ) : (
              <p>Student Record not found</p>
            )
          }
        </div>




      </div>

    </>
  )
}

export default StudentPost
