import React, { useState } from 'react'
import '../CSS/adminCSS/style.css'
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Cardcomponent from '../adminpage/Cardcomponent'
import { useEffect } from 'react'
import axios from 'axios'
import Circleproceesbar from './Circleproceesbar';
import ProfileEditform from './ProfileEditform';
// import { CountGlarryimg } from '../../../server/controllers/AdmindashbordController';
function AdminDashbord() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  const [count, setCount] = useState("Loading.."); // for total record
  const [err, setError] = useState(null);

  const [ppucount, setppucount] = useState("Loading.."); // for ppu count

  const [akucount, setakucount] = useState("Loading.."); // for aku count

  const [Admincount, setAdmincount] = useState("Loading.."); // for aku count

  const [StudentDetailsList, setStudentDetailsList] = useState([0]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/countstudent');
        setCount(response.data.results);
      }
      catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled
          console.log('Request cancelled:', err.message);
        } else if (axios.isAxiosError(err)) {
          if (err.code === 'ECONNABORTED') {
            console.log('Request timeout. Please try again.');
          } else if (err.response) {
            console.log('Server responded with an error:', err.response.data);
            console.log('Status code:', err.response.status);
          } else if (err.message === 'Network Error') {
            console.log('Network Error. Please check your internet connection.');
          } else {
            console.error('Axios Error:', err.message);
          }
        } else {
          console.error('Unexpected Error:', err.message);
        }
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  // get ppu student count

  useEffect(() => {
    const fetchppuData = async () => {
      try {
        const response = await axios.get('/countPPUstudent');
        setppucount(response.data.results);
      }
      catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled
          console.log('Request cancelled:', err.message);
        } else if (axios.isAxiosError(err)) {
          if (err.code === 'ECONNABORTED') {
            console.log('Request timeout. Please try again.');
          } else if (err.response) {
            console.log('Server responded with an error:', err.response.data);
            console.log('Status code:', err.response.status);
          } else if (err.message === 'Network Error') {
            console.log('Network Error. Please check your internet connection.');
          } else {
            console.error('Axios Error:', err.message);
          }
        } else {
          console.error('Unexpected Error:', err.message);
        }
        setError(err.message);
      }
    };

    fetchppuData();
  }, []);

  // get akucount data 

  useEffect(() => {
    const fetchakuData = async () => {
      try {
        const response = await axios.get('/countAKUstudent');
        setakucount(response.data.results);
      }
      catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled
          console.log('Request cancelled:', err.message);
        } else if (axios.isAxiosError(err)) {
          if (err.code === 'ECONNABORTED') {
            console.log('Request timeout. Please try again.');
          } else if (err.response) {
            console.log('Server responded with an error:', err.response.data);
            console.log('Status code:', err.response.status);
          } else if (err.message === 'Network Error') {
            console.log('Network Error. Please check your internet connection.');
          } else {
            console.error('Axios Error:', err.message);
          }
        } else {
          console.error('Unexpected Error:', err.message);
        }
        setError(err.message);
      }
    };

    fetchakuData();
  }, []);

  // Here admin api count  /getadminCount

  useEffect(() => {
    const fetchAdminCount = async () => {
      try {
        const response = await axios.get('/getadminCount');
        setAdmincount(response.data.results);
      }
      catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled
          console.log('Request cancelled:', err.message);
        } else if (axios.isAxiosError(err)) {
          if (err.code === 'ECONNABORTED') {
            console.log('Request timeout. Please try again.');
          } else if (err.response) {
            console.log('Server responded with an error:', err.response.data);
            console.log('Status code:', err.response.status);
          } else if (err.message === 'Network Error') {
            console.log('Network Error. Please check your internet connection.');
          } else {
            console.error('Axios Error:', err.message);
          }
        } else {
          console.error('Unexpected Error:', err.message);
        }
        setError(err.message);
      }
    };

    fetchAdminCount();
  }, []);

  // Fetch student Details List

  // const fetchStudentDetailList = async () => {

  //   const data = await axios.get('/getstudentProfileList')
  //   if (data.data.success) {
  //     setStudentDetailsList(data.data.data)

  //   }

  // }
  // useEffect(() => {
  //   fetchStudentDetailList()
  // }, [])
  // start fetching data from database



  const fetchStudentDetailList = async () => {
    try {
      const response = await axios.get('/getstudentProfileList');

      if (response.data.success) {
        setStudentDetailsList(response.data.data);
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
    fetchStudentDetailList();
  }, []);

  // show api 

  const [showprofiledata, seTshowprofiledata] = useState(null)

  const showprofileckick = async (id) => {


    try {
      const response = await axios.get('/showstudentprofile/' + id)

      if (response.data.success) {

        seTshowprofiledata(response.data.data);
        console.log("suceess feching data")


      }
    } catch (error) {

      console.error(error)
    }


  }



  const deletestudentprofileList = async (id) => {
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
        const response = await axios.delete('/deletestudentProfileList/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'

          });
          fetchStudentDetailList();
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

  const formatIndianDate = (dateString) => {
    const options = { timeZone: 'Asia/Kolkata' };
    return new Date(dateString).toLocaleString('en-IN', options);
  };

  // start edit profile api process

  const [showModal1, setShowModal1] = useState(false);

  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);


  const [dataedit, setDataedit] = useState({
    collegeId: '',
    fullName: '',
    fathersName: '',
    email: '',
    contact: '',
    gender: '',
    university: '',
    course: '',
    dob: '',
    password: '',
    confirmPassword: '',
    address: '',
    id: "",
  });



  const handlupdate = async (e) => {
    e.preventDefault();

  };

  const profileEditHandler = (id) => {

    const editingData = StudentDetailsList.find((item) => item._id === id);
    setDataedit({

      fullName: editingData.fullName,
      email: editingData.email,
      contact: editingData.contact,
      id: editingData._id, // Don't forget to include the id for updating
    });

    handleShowModal1(true)
  }

  const [Bookscount, setBookscount] = useState("Loading..");
  const [GimgCount, setGimgcount] = useState("Loading..");
  const [studentProfileCount, setStudentprofilecount] = useState("Loading..");

  
  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const response = await axios.get('/countbooks');
        setBookscount(response.data.results);
      }
      catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled
          console.log('Request cancelled:', err.message);
        } else if (axios.isAxiosError(err)) {
          if (err.code === 'ECONNABORTED') {
            console.log('Request timeout. Please try again.');
          } else if (err.response) {
            console.log('Server responded with an error:', err.response.data);
            console.log('Status code:', err.response.status);
          } else if (err.message === 'Network Error') {
            console.log('Network Error. Please check your internet connection.');
          } else {
            console.error('Axios Error:', err.message);
          }
        } else {
          console.error('Unexpected Error:', err.message);
        }
        setError(err.message);
      }
    };

    fetchbooks();
  }, []);
  // get ppu student count

  useEffect(() => {
    const fetchgimg = async () => {
      try {
        const response = await axios.get('/countglarry');
        setGimgcount(response.data.results);
      }
      catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled
          console.log('Request cancelled:', err.message);
        } else if (axios.isAxiosError(err)) {
          if (err.code === 'ECONNABORTED') {
            console.log('Request timeout. Please try again.');
          } else if (err.response) {
            console.log('Server responded with an error:', err.response.data);
            console.log('Status code:', err.response.status);
          } else if (err.message === 'Network Error') {
            console.log('Network Error. Please check your internet connection.');
          } else {
            console.error('Axios Error:', err.message);
          }
        } else {
          console.error('Unexpected Error:', err.message);
        }
        setError(err.message);
      }
    };

    fetchgimg();
  }, []);

  // /countStudnetprofile'

  
  useEffect(() => {
    const fetchstudentprofilecount = async () => {
      try {
        const response = await axios.get('/countStudnetprofile');
        setStudentprofilecount(response.data.results);
      }
      catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled
          console.log('Request cancelled:', err.message);
        } else if (axios.isAxiosError(err)) {
          if (err.code === 'ECONNABORTED') {
            console.log('Request timeout. Please try again.');
          } else if (err.response) {
            console.log('Server responded with an error:', err.response.data);
            console.log('Status code:', err.response.status);
          } else if (err.message === 'Network Error') {
            console.log('Network Error. Please check your internet connection.');
          } else {
            console.error('Axios Error:', err.message);
          }
        } else {
          console.error('Unexpected Error:', err.message);
        }
        setError(err.message);
      }
    };

    fetchstudentprofilecount();
  }, []);
  return (


    <>


      <div className=''>
        <div className='dashbord-first-section'>
          <div className='container  py-2'>
            <div className='row mt-md-5 py-3'>


              <div className='col-md-3'>
                <div className='bg-success bg bgadmincard justify-content-center shadow rounded mb-2'>
                  <div className='icon p-2  admmin-fetch-data-card'>
                    <span className='box-1'><i class="bi bi-people-fill"></i>Total</span>
                    {/* 
                {(
                  totalStudent.map((e1))=>{
                    return(
                      <span className="box-2">data</span>

                    )
                  }
                )} */}

                    <span className="box-2">{count}</span>



                  </div>

                </div>
              </div>
              <div className='col-md-3'>
                <div className='bg-success bg bgadmincard justify-content-center mb-2 shadow  rounded'>
                  <div className='icon p-2  admmin-fetch-data-card'>
                    <span className='box-1'><i class="bi bi-person-fill"></i>PPU</span>
                    <span className="box-2">{ppucount}</span>
                  </div>

                </div>
              </div>
              <div className='col-md-3'>
                <div className='bg-success bg bgadmincard justify-content-center shadow rounded mb-2'>
                  <div className='icon p-2  admmin-fetch-data-card'>
                    <span className='box-1'><i class="bi bi-person-fill"></i>AKU</span>
                    <span className="box-2">{akucount}</span>
                  </div>

                </div>
              </div>
              <div className='col-md-3'>
                <div className='bg-success bg bgadmincard justify-content-center shadow rounded mb-2'>
                  <div className='icon p-2 pb-4 admmin-fetch-data-card'>
                    <span className='box-1'><i class="bi bi-person-fill"></i>Admin</span>
                    <span className="box-2">{Admincount}</span>
                  </div>

                </div>
              </div>

            </div>


            {/* defind row */}
            <div className='row pt-2'>

              <div className='col-md-6 mt-0'>

                {/* start progress system */}

                <div className='main-progress-cont shadow rounded bg-light px-4 py-3'>

                  {/* // first progress bar  */}
                  {
                    <div className='progress mb-2' >
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${count}%` }}
                      >
                        {count}%
                      </div>
                    </div>
                  }
                  {
                    <div className='progress mb-2' >
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: `${Admincount}%` }}
                      >
                        {Admincount}%
                      </div>
                    </div>

                  }


                  {/* // second progress bar  */}
                  {
                    <div className='progress mb-2' >
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${ppucount}%` }}
                      >
                        {ppucount}%
                      </div>
                    </div>
                  }


                  {/* // third progress bar  */}
                  {
                    <div className='progress mb-2 progress-bg1' >
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${akucount}%` }}
                      >
                        {akucount}%
                      </div>
                    </div>
                  }
                 
                </div>
                <p className='text-center report-txt pt-2'>All users reports</p>


                {/* end progress system */}
              </div>

              <div className='col-md-6 '>
                <div className='row pt-2'>
                  <div className='col-md-4 circle-card'>
                  <div className='mt-5 bg-success'>
                      <div class="containerp mt-5">


                        <div class="ui-widgets">
                          <div class="ui-values">{Bookscount}</div>
                          <div class="ui-labels">Books</div>
                        </div>

                      </div>
                     
                    </div>

                  </div>

                  <div className='col-md-4 circle-card '>
                  <div className='mt-5 bg-success'>
                      <div class="containerp mt-5">


                        <div class="ui-widgets">
                          <div class="ui-values">{GimgCount}</div>
                          <div class="ui-labels">Gallery</div>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className='col-md-4 circle-card'>
                    <div className='mt-5 bg-success'>
                      <div class="containerp mt-5">


                        <div class="ui-widgets">
                          <div class="ui-values">{studentProfileCount}</div>
                          <div class="ui-labels mt-4">student profile</div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>



              </div>


            </div>

            {/* end */}

          </div>




        </div>




        {/* Here start alert model */}

        {/* Profile edot model */}

        <div className='modal-fullscreen-xxl-down'>
          <Modal show={showModal1} onHide={handleCloseModal1} size="xl" className="modal-fullscreen-xxl-down">
            <Modal.Header closeButton >
              <Modal.Title className='text-primary'><i class="bi bi-person-circle me-2"></i>Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>


              <ProfileEditform
                registerHandler={handlupdate}
                data={dataedit}
              />
            </Modal.Body>
            <Modal.Footer>
              {/* Close button for the modal */}
              <Button variant="primary" onClick={handleCloseModal1} className='px-5'>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </div>



        {/* End laert model */}


        <div className='modal-fullscreen-xxl-down'>
          <Modal show={showModal} onHide={handleCloseModal} size="xl" className="modal-fullscreen-xxl-down">
            <Modal.Header closeButton >
              <Modal.Title className='text-primary'><i class="bi bi-person-circle me-2"></i>Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Add your profile content here */}
              {
                showprofiledata ? (

                  // showprofiledata.map((s2) => {

                  // return (
                  <>
                    <div className='px-5 show-profile-cont'>
                      <div className='row'>
                        <div className='col-12 col-md-8 col-lg-8  mfhs'>


                          <p className=''><label> College ID: </label>   {showprofiledata.collegeId}</p>
                          <p><label> Student name : </label> {showprofiledata.fullName}</p>
                          <p> <label>Father's Name :</label> {showprofiledata.fathersName}</p>
                          <p><label>Gender : </label>{showprofiledata.gender}</p>
                          <p><label>University : </label>{showprofiledata.university}</p>
                          <p><label>Course : </label>{showprofiledata.course}</p>
                          <p><label>Email : </label>{showprofiledata.email}</p>
                          <p><label>Phone No : </label>{showprofiledata.contact}</p>
                          <p><label>DOB :</label>{showprofiledata.dob}</p>
                          <p><label>Address : </label>{showprofiledata.address}</p>

                        </div>
                        <div className='col-12 col-md-4 col-lg-4 bg-light'>
                          <div className='user-image-container'></div>
                          <p className='text-center'> User : {showprofiledata.fullName}</p>

                          <p className='text-center'>Active: {formatIndianDate(showprofiledata.createdAt)}</p>
                        </div>
                      </div>

                    </div>
                  </>


                ) : (
                  <p>Loading</p>
                )

                // 

              }

            </Modal.Body>
            <Modal.Footer>
              {/* Close button for the modal */}
              <Button variant="primary" onClick={handleCloseModal} className='px-5'>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </div>

        {/*start Add List of Register user */}

        <div className='mt-4 pt-3 hide-student-cont-data'>

          <p className='mt-0 mt-md-3 fs-4 mfhs text-primary px-3  mb-1 '>STUDENT DETAILS</p>

          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">Course</th>
                  <th scope="col">University</th>
                  <th scope="col">Details</th>

                  <th scope="col">Action</th>

                </tr>
              </thead>


              {
                StudentDetailsList[0] ? (

                  StudentDetailsList.map((s1) => {

                    return (
                      <tbody>
                        <tr>

                          <td>{s1.collegeId}</td>
                          <td>{s1.fullName}</td>
                          <td>{s1.contact}</td>
                          <td>{s1.email}</td>
                          <td>{s1.course}</td>
                          <td>{s1.university}</td>

                          <td>
                            <div onClick={() => showprofileckick(s1._id)}>
                              <button type="button" className="btn btn-success shadow-none" onClick={handleShowModal} >

                                <i class="bi bi-person-circle me-1"></i>Profile


                              </button>
                            </div>



                          </td>
                          <td>
                            <div class="btn-group shadow-none" role="group" aria-label="Basic mixed styles example">
                              <button type="button" class="btn btn-primary shadow-none" onClick={() => profileEditHandler(s1._id)}><i class="bi bi-pencil-square"></i></button>
                              <button type="button" class="btn btn-warning shadow-none" onClick={() => deletestudentprofileList(s1._id)}><i class="bi bi-trash"></i></button>
                              {/* <button type="button" class="btn btn-success shadow-none"><i class="bi bi-person-circle"></i></button> onClick={() => deleteannouceList(e1._id)} */}
                            </div>
                          </td>
                        </tr>


                      </tbody>
                    )
                  })
                ) : (
                  <p> Loading</p>
                )

              }

            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashbord
