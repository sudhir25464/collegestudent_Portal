import React, { useEffect } from 'react'
import '../CSS/setting.css'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios'

import Swal from 'sweetalert2';

// import { deleteadminProfile } from '../../../server/controllers/adminAuthcontroller';



function SettingAuthpage() {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  const [adminPrfilelist, setadminProfilelist] = useState([]);

  const getAdminprofileData = async () => {

    try {
      const responce = await axios.get('/getadminprofile')
      if (responce.data.success) {
        setadminProfilelist(responce.data.data)
      } else {
        console.error('Error:', responce.data.data)
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
  }
  useEffect(() => {

    getAdminprofileData();
  }, [])


  const deleteadmin = async (id) => {

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
        const response = await axios.delete('/deleteAdminprofile/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'
          });
          getAdminprofileData();
          // fetchprofileData();
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

  const [authprofile, setauthprofile] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    role: "",
    image: null,

  });

  const AuthprofileonChange = (e) => {

    const { value, name, files } = e.target

    if (name === "image") {
      setauthprofile((prev) => ({
        ...prev,
        [name]: files[0]  // Use files array for file input
      }));
    } else {
      setauthprofile((prev) => ({
        ...prev,
        [name]: value
      }));
    }

  }


  const handleruthsubmit = async (e) => {



    const formData = new FormData();

    formData.append("name", authprofile.name);
    formData.append("email", authprofile.email);
    formData.append("contact", authprofile.contact);
    formData.append("password", authprofile.password);
    formData.append("role", authprofile.role);
    formData.append("image", authprofile.image);






    try {
      const response = await axios.post('/adminsignup', formData);
      console.log(formData)
      console.log(response);

      if (response.data.data) {

        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error uploading data:", error);
    }

  }


  const formatIndianDate = (dateString) => {
    const options = { timeZone: 'Asia/Kolkata' };
    return new Date(dateString).toLocaleString('en-IN', options);
  };

  // start edit admin mode 
  const [showModal1, setShowModal1] = useState(false);

  const handleShow1 = () => setShowModal1(true);
  const handleClose1 = () => setShowModal1(false);

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // const handleEdit = (id) => {
  //   const profileToEdit = adminPrfilelist.find((p) => p._id === id);
  //   setauthprofile({
  //     name: profileToEdit.name,
  //     email: profileToEdit.email,
  //     contact: profileToEdit.contact,
  //     password: '', // You may want to handle password separately
  //     role: profileToEdit.role,
  //     image: profileToEdit.image,
  //   });
  //   setEditMode(true);
  //   setEditId(id);
  //   handleShow1();
  // };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditId(null);
    setauthprofile({
      name: '',
      email: '',
      contact: '',
      password: '',
      role: '',
      image: null,
    });
    handleClose1();
  };

  const handleEdit = (id) => {
    const profileToEdit = adminPrfilelist.find((p) => p._id === id);
    setauthprofile({
      name: profileToEdit.name,
      email: profileToEdit.email,
      contact: profileToEdit.contact,
      password: '', // You may want to handle the password separately
      role: profileToEdit.role,
      image: profileToEdit.image,
    });
    setEditMode(true);
    setEditId(id);
    handleShow1();
  };
  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('name', authprofile.name);
    formData.append('email', authprofile.email);
    formData.append('contact', authprofile.contact);
    formData.append('password', authprofile.password);
    formData.append('role', authprofile.role);
    formData.append('image', authprofile.image);

    try {
      const response = await axios.put(`/updateadminprofile/${editId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Make sure to set the correct content type for FormData
        },
      });

      if (response.data.success) {
        Swal.fire({
          title: 'Updated!',
          text: response.data.message,
          icon: 'success',
        });
        getAdminprofileData();
        handleCancelEdit();
      } else {
        Swal.fire({
          title: 'Error!',
          text: response.data.message,
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred. Please try again later.',
        icon: 'error',
      });
    }
  };

  // end edit admin mode 

  // theme 
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [authslider, setauthslider] = useState([]);

  const [sliderdata, setsliderdata] = useState({

    image: null

  })

  const sliderOnchange = (e) => {


    const { value, name, files } = e.target

    if (name === "image") {
      setsliderdata((prev) => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setsliderdata((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }


  const sliderOnsubmit = async (e) => {


    e.preventDefault()

    const formData = new FormData();
    formData.append("image", sliderdata.image);

    try {

      const responce = await axios.post('/uploadauthslider', formData);


      if (responce.data.success) {
        setShow3(false)
        getauthsliderimg();
        alert(responce.data.message);
      }
    } catch (error) {
      console.error('error Uploading data');
    }


  }
  const getauthsliderimg = async () => {

    try {
      const responce = await axios.get('/getuthslider')
      if (responce.data.success) {
        setauthslider(responce.data.data)
      } else {
        console.error('Error:', responce.data.data)
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
  }
  useEffect(() => {

    getauthsliderimg();
  }, [])

  // /deleteauthslider
  const deleteslider1 = async (id) => {

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
        const response = await axios.delete('/deleteauthslider/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'
          });
          getauthsliderimg();
          // fetchprofileData();
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

  // home slider
  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [homeslider, sethomeslider] = useState([]);

  const [homesliderdata, sethomesliderdata] = useState({

    image: null

  })

  const homesliderOnchange = (e) => {


    const { value, name, files } = e.target

    if (name === "image") {
      sethomesliderdata((prev) => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      sethomesliderdata((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }


  const homesliderOnsubmit = async (e) => {


    e.preventDefault()

    const formData = new FormData();
    formData.append("image", homesliderdata.image);

    try {

      const responce = await axios.post('/uploadhomeslider', formData);


      if (responce.data.success) {
        setShow4(false)

        alert(responce.data.message);
        gethomesliderimg();

      }
    } catch (error) {
      console.error('error Uploading data');
    }


  }
  const gethomesliderimg = async () => {

    try {
      const responce = await axios.get('/gethomeslider')
      if (responce.data.success) {
        sethomeslider(responce.data.data)
      } else {
        console.error('Error:', responce.data.data)
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
  }
  useEffect(() => {

    gethomesliderimg();
  }, [])

  const deleteslider2 = async (id) => {

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
        const response = await axios.delete('/deletehomeslider/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'
          });
          gethomesliderimg();
          // fetchprofileData();
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

      <div className='container-fluid setting-auth-conatiner'>
        <div className=' pt-4 mb-4 bg-light '>

          <div className='border p-3'>
            <p className='fs-5 fhs'><i class="bi bi-person-circle me-2"></i>  Welcome Auther
              <Button variant="warning" className='pull-right shadow-none' onClick={handleShow}>
                Create New Admin
              </Button>

            </p>
            <p className='mfhs bg-light mfhs p-2'>Admin-profile List</p>

            <div className='row'>


              {

                adminPrfilelist[0] ? (

                  adminPrfilelist.map((p1) => {
                    return (
                      <div className='col-md-6  mb-2 p-1'>
                        <div className='border auth-admin-p-card-design p-2 pb-4'>
                          <div className='img-profile-cont'>
                            <img className='img-profile' width="140px" src={`http://localhost:8000/${p1?.image}`} />
                          </div>
                          <div className='auth-get-profile-details-cont'>
                            <p className='fs-5 mfhs'><label>Name : </label>{p1.name}</p>
                            <p><label>Email/userId : </label>{p1.email}</p>
                            <p><label>Contact : </label>{p1.contact}</p>
                            <p><label>role : </label>{p1.role}</p>
                            <p><label>Active status : </label>{formatIndianDate(p1.createdAt)}</p>
                          </div>

                          <span className="badge badge-warning pull-right me-1 " onClick={() => { deleteadmin(p1._id) }}>delete</span>


                          <span className="badge badge-dark pull-right me-1" onClick={() => {
                            handleEdit(p1._id);
                          }} >Edit</span>

                        </div>

                      </div>
                    )
                  })


                ) : (
                  <p>Loading..</p>
                )
              }
            </div>
          </div>
        </div>


        <div className='theme section border mb-4'>
          <p className='fs-3 px-5 pt-0 text-dark  bg- dark fw-bold fhs bg-light'>User theme

            <Button variant="light" className='fs-2 mx-4 shadow-none' onClick={handleShow3}>
              <i class="bi bi-cloud-plus"></i>
            </Button>
          </p>
          <div className='row get-uthslider-style-cont mb-3'>


            {
              authslider[0] ? (

                authslider.map((sliderimg) => {
                  return (
                    <div className='col-md-5 col-lg-5 mb-1'>
                      <img height="200px" width="100%" src={`http://localhost:8000/${sliderimg?.image}`} />
                      <span className='badge badge-warning pull-right mt-1' onClick={() => { deleteslider1(sliderimg._id) }}>delete</span>

                      <span className='p-1 sfhs pull-right'>{formatIndianDate(sliderimg.createdAt)}</span>
                    </div>
                  )
                })
              ) : (
                <p className='p-3'>null</p>
              )
            }


          </div>
        </div>




        {/* home theme */}


        <div className='theme section border mb-4'>
          <p className='fs-3 px-5 pt-0 text-dark  bg- dark fw-bold fhs bg-light'>Home theme

            <Button variant="light" className='fs-2 mx-4 shadow-none' onClick={handleShow4}>
              <i class="bi bi-cloud-plus"></i>
            </Button>
          </p>
          <div className='row get-uthslider-style-cont mb-3'>


            {
              homeslider[0] ? (

                homeslider.map((sliderimg) => {
                  return (
                    <div className='col-md-5 col-lg-5 mb-1'>
                      <img height="200px" width="100%" src={`http://localhost:8000/${sliderimg?.image}`} />
                      <span className='badge badge-warning pull-right mt-1' onClick={() => { deleteslider2(sliderimg._id) }}>delete</span>

                      <span className='p-1 sfhs pull-right'>{formatIndianDate(sliderimg.createdAt)}</span>
                    </div>
                  )
                })
              ) : (
                <p className='p-3'>loading</p>
              )
            }


          </div>
        </div>

      </div>


      <Modal show={showModal} onHide={handleClose} size="xl" className="modal-fullscreen-xxl-down">
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Create account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleruthsubmit}>
            <div className='px-5 py-2'>
              <div class="mb-3 flex-row">
                <label class="form-label">Name: </label>
                <input type="text" className="form-control" name='name' onChange={AuthprofileonChange} id="validationDefault02" placeholder="Enter full name" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Email: </label>
                <input type="email" className="form-control" name='email' onChange={AuthprofileonChange} id="validationDefault02" placeholder="Enter email" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Contact No: </label>
                <input type="text" className="form-control" name='contact' onChange={AuthprofileonChange} id="validationDefault02" placeholder="Enter Mobile number" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Password: </label>
                <input type="passoword" className="form-control" name='password' onChange={AuthprofileonChange} id="validationDefault02" placeholder="passoword must be 8 charachter" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">role: </label>
                <input type="text" className="form-control" name='role' onChange={AuthprofileonChange} id="validationDefault02" placeholder="Job role" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Profile image</label>
                <input type="file" className="form-control" name='image' onChange={AuthprofileonChange} id="validationDefault02" required />
              </div>
            </div>
            <Modal.Footer>

              <Button type='submit' variant="warning" >
                Register
              </Button>

            </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>


      {/* edit model */}

      <Modal show={showModal1} onHide={handleClose1} size="xl" className="modal-fullscreen-xxl-down">
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>
            {editMode ? 'Edit Account' : 'Create Account'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={editMode ? handleUpdate : handleruthsubmit}>
            <div className='px-5 py-2'>
              <div class="mb-3 flex-row">
                <label class="form-label">Name: </label>
                <input type="text" className="form-control" name='name' value={authprofile.name} onChange={AuthprofileonChange} id="validationDefault02" placeholder="Enter full name" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Email: </label>
                <input type="email" className="form-control" name='email' value={authprofile.email} onChange={AuthprofileonChange} id="validationDefault02" placeholder="Enter email" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Contact No: </label>
                <input type="text" className="form-control" name='contact' value={authprofile.contact} onChange={AuthprofileonChange} id="validationDefault02" placeholder="Enter Mobile number" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Password: </label>
                <input type="password" className="form-control" name='password' value={authprofile.password} onChange={AuthprofileonChange} id="validationDefault02" placeholder="Password must be 8 characters" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Role: </label>
                <input type="text" className="form-control" name='role' value={authprofile.role} onChange={AuthprofileonChange} id="validationDefault02" placeholder="Job role" required />
              </div>
              <div class="mb-3 flex-row">
                <label class="form-label">Profile image</label>
                <input type="file" className="form-control" name='image' onChange={AuthprofileonChange} id="validationDefault02" required />
              </div>
            </div>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleCancelEdit}>
                Cancel
              </Button>
              {editMode ? (
                <Button variant='primary' onClick={handleUpdate}>
                  Update
                </Button>
              ) : (
                <Button type='submit' variant='primary'>
                  Register
                </Button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>


      {/* third model  */}



      <Modal show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={sliderOnsubmit}>
            <div class="mb-3 flex-row">
              <label class="form-label">Slider image</label>
              <input type="file" className="form-control" name='image' onChange={sliderOnchange} id="validationDefault02" required />
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose3}>
                Close
              </Button>
              <Button variant="primary" type='submit'>
                Save changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>



      <Modal show={show4} onHide={handleClose4} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={homesliderOnsubmit}>
            <div class="mb-3 flex-row">
              <label class="form-label">Slider image</label>
              <input type="file" className="form-control" name='image' onChange={homesliderOnchange} id="validationDefault02" required />
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose4}>
                Close
              </Button>
              <Button variant="primary" type='submit'>
                Save changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default SettingAuthpage
