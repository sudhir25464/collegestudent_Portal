// import React, { useEffect, useState ,Link} from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import '../CSS/Studentprofile.css'

import Swal from 'sweetalert2'
import axios from 'axios'


import { Card, Button } from 'react-bootstrap'
function AuthStudentprofilePage() {

    const [buttontougle, setbuttontougle] = useState(false);

    const [authstudentList, setauthstudentList] = useState([]) // for getstudentprofile
    const [error, setError] = useState(null)


    const [studentprofile, seTstudentprofile] = useState({

        name: '',
        jobRole: '',
        courseDetails: '',
        coursesession: '',
        distric: '',

        setLinkdin: '',
        setEmail: '',
        setWattsp: '',
        studentDesc: '',

        image: null,


    })


    const SprofileonChange = (e) => {

        const { value, name, files } = e.target

        if (name === "image") {
            seTstudentprofile((prev) => ({
                ...prev,
                [name]: files[0]  // Use files array for file input
            }));
        } else {
            seTstudentprofile((prev) => ({
                ...prev,
                [name]: value
            }));
        }

    }


    const SprofileHandler = async (e) => {



        const formData = new FormData();
        formData.append("name", studentprofile.name);
        formData.append("jobRole", studentprofile.jobRole);
        formData.append("courseDetails", studentprofile.courseDetails);


        formData.append("coursesession", studentprofile.coursesession);
        formData.append("distric", studentprofile.distric);
        formData.append("setLinkdin", studentprofile.setLinkdin);
        formData.append("setEmail", studentprofile.setEmail);
        formData.append("setWattsp", studentprofile.setWattsp);
        formData.append("studentDesc", studentprofile.studentDesc);
        formData.append("image", studentprofile.image);





        try {
            const response = await axios.post('/authstudent', formData);
            console.log(response);

            if (response.data.data) {

                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error uploading data:", error);
        }

    }


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
    const deleteprofilehandler = async (id) =>{

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
            const response = await axios.delete('/deletestudentprofile/' +id )
  
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
            <div className='container-fluid main-update-container'>
                <div className='container'>
                    <div className='row'>
                        <p className='mfhs  fs-3 fw-bold p-5 text-center'>Add more Senior student for guidance and support <button className='btn btn-warning' onClick={() => setbuttontougle(true)}>ADD NEW</button></p>
                        <div className='col'>
                            {
                                buttontougle && (

                                    <div className='student-profile-form-container m-2 mb-3 py-5 px-3 shadow bg-light '>
                                        <div className='mb-5'>
                                            <button className='btn btn-default pull-right' onClick={() => setbuttontougle(false)}><i class="bi bi-x-square"></i></button>
                                        </div>
                                        <form onSubmit={SprofileHandler}>
                                            <div className="form-row">
                                                <div className="col-md-4 mb-3">
                                                    <label >Full name</label>
                                                    <input type="text" className="form-control" name='name' onChange={SprofileonChange} placeholder="Enter full name" required />
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label for="validationDefault02">Job role</label>
                                                    <input type="text" className="form-control" name='jobRole' onChange={SprofileonChange} id="validationDefault02" placeholder="Job role" required />
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="">
                                                        <label for="validationDefault02">Couse detail</label>
                                                        <input type="text" className="form-control" id="validationDefault02" name='courseDetails' onChange={SprofileonChange} placeholder="eg:- BCA - PPU- PPU " required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-4 mb-3">
                                                    <label for="validationDefault03">Session</label>
                                                    <input type="text" className="form-control" name='coursesession' onChange={SprofileonChange} placeholder="eg: 2020-2024 " required />
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label >Current city</label>
                                                    <input type="text" className="form-control" name='distric' onChange={SprofileonChange} placeholder="Enter current city" required />
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label >Linkdin Profile URL</label>
                                                    <input type="text" className="form-control" name='setLinkdin' onChange={SprofileonChange} id="validationDefault05" placeholder="Linkdin Profile URL" required />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-4 mb-3">
                                                    <label for="validationDefault03">Email</label>
                                                    <input type="text" className="form-control" name='setEmail' onChange={SprofileonChange} placeholder="exempale123@gmail.com" required />
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label >WhatsApp No:</label>
                                                    <input type="text" className="form-control" name='setWattsp' onChange={SprofileonChange} placeholder="Enter whatsApp number" required />
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label >Profile summary</label>
                                                    <input type="text" className="form-control" name='studentDesc' onChange={SprofileonChange} id="validationDefault05" placeholder="work-exprience,  location,more.." required />
                                                </div>
                                            </div>
                                            <div className='form-row'>

                                                <div className="col-md-6 mb-3">
                                                    <label for="validationDefault03">Photo</label>
                                                    <input type="file" className="form-control" name='image' onChange={SprofileonChange} id="validationDefault03" placeholder="choose profile picture" required />
                                                </div>

                                                <div className="col-md-6 mb-3 mx-auto">
                                                    <div className='studentimage'>
                                                        <img src=''></img>
                                                    </div>
                                                    <label for="validationDefault03">profile image</label>

                                                </div>

                                            </div>

                                            <div className='mb-4'>
                                                <button className="btn btn-warning pull-right " type="submit">Submit form</button>
                                            </div>
                                        </form>

                                    </div>


                                )
                            }


                        </div>
                    </div>
                </div>


            </div>


            {/* Get student profile section */}
            <div className='container-fluid bg-light pt-3'>
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
                                                            <i class="bi bi-envelope-open me-1"></i>{e.setEmail}

                                                        </p>


                                                    </div>
                                                    <div className='col-6'>
                                                        <p>{e.courseDetails}</p>
                                                        <p>{e.coursesession}</p>
                                                    </div>
                                                </div>



                                                
                                                <p>{e.studentDesc}</p>


                                                <span type="button" class="badge badge-primary shadow-none pull-right me-2" onClick={()=> deleteprofilehandler(e._id)}><i class="bi bi-trash"></i>delete</span>

                                                <span type="button" class="badge badge-primary  shadow-none pull-right me-2"><i class="bi bi-pencil-square"></i>edit</span>
 
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

export default AuthStudentprofilePage
