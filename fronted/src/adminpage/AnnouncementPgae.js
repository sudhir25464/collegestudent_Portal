
import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import "../CSS/annouce.css"

import axios from 'axios'
function AnnouncementPgae() {

  const [tempAnnounce, settempAnnounce] = useState(false)
  const [tempNotic, settempNotic] = useState(false)

  const [annouceDatalist, setannounceDatalist] = useState([])

  const [noticDataList, setNoticDatalist] = useState([])
  // start process of adding notic data to database
  const [noticData, setnoticData] = useState({

    heading: "",
    noticmessage: ""
  })


  const nhandleonChnage = (e) => {
    const { value, name } = e.target
    setnoticData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  // add notic here 
  const nhandleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post('/createNotic', noticData)
    console.log(data);
    if (data.data.success) {
      settempNotic(false)
      fetchNoticData()
      alert(data.data.message)
    }
  }
  // getch notic here
  // const fetchNoticData = async () => {

  //   const data = await axios.get('/getnoticDetails')
  //   if (data.data.success) {
  //     setNoticDatalist(data.data.data)

  //   }
  // }
  // useEffect(() => {
  //   fetchNoticData()
  // }, [])

  const fetchNoticData = async () => {
    try {
      const response = await axios.get('/getnoticDetails');
  
      if (response.data.success) {
        setNoticDatalist(response.data.data);
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      if (error.isAxiosError) {
        if (error.code === 'ECONNABORTED') {
          console.log('Request timeout. Please try again.');
        } else if (error.response) {
          console.log('Server responded with an error:', error.response.data);
          console.log('Status code:', error.response.status);
        } else if (error.message === 'Network Error') {
          console.log('Network Error. Please check your internet connection.');
        } else {
          console.error('Axios Error:', error.message);
        }
      } else {
        console.error('Unexpected Error:', error.message);
      }
    }
  };
  
  useEffect(() => {
    fetchNoticData();
  }, []);
  // start delete Notic data from db api intregration

  const deletenotic = async (id) => {

    // const data = await axios.delete('/deletenotic/' + id)
    // if (data.data.success) {

    //   fetchNoticData()

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
        const response =  await axios.delete('/deletenotic/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'
          });
          fetchNoticData();
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




  // start procees of adding data user to database
  const [announceData, setannounceData] = useState({

    message: "",
    link:"",
  })
  //get value from user
  const ahandleonChnage = (e) => {
    const { value, name } = e.target
    setannounceData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const ahandleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post('/newannounce', announceData)
    console.log(data);
    if (data.data.success) {
      settempAnnounce(false)
      fetchAnnouceData()

      alert(data.data.message)
    }
  }

  // start fetching data from database

  // const fetchAnnouceData = async () => {

  //   const data = await axios.get('/getannouncement')
  //   if (data.data.success) {
  //     setannounceDatalist(data.data.data)

  //   }
  // }
  // useEffect(() => {
  //   fetchAnnouceData()
  // }, [])

  const fetchAnnouceData = async () => {
    try {
      const response = await axios.get('/getannouncement');
  
      if (response.data.success) {
        setannounceDatalist(response.data.data);
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
    fetchAnnouceData();
  }, []);

  const formatIndianDate = (dateString) => {
    const options = { timeZone: 'Asia/Kolkata' };
    return new Date(dateString).toLocaleString('en-IN', options);
  };
  // start delete data from db api intregration

  const deleteannouceList = async (id) => {

    // const data = await axios.delete('/deleteannounced/' + id)
    // if (data.data.success) {

    //   fetchAnnouceData()
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
        const response =  await axios.delete('/deleteannounced/' + id)

        if (response.data.success) {
          // Use SweetAlert for success
          Swal.fire({
            title: 'Deleted!',
            text: response.data.message,
            icon: 'success'
          });
          fetchAnnouceData();
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
      <div className='main-bg-announce '>
        <div className="container pt-5 ">
          <p className='mx-md-5 mx-lg-5 btn-p bg-light  fs-5 mfhs'>
          Administration – Seamless Upload of Important Announcements and Notices
            <button className='btn  btn-warning b shadow-none me-2 border mfhs' onClick={() => settempAnnounce(true)} ><i class="bi bi-plus"></i>Announce</button>
            {/*  data-toggle="modal" data-target="#exampleModalCenter" this code is for bootstap model lifting */}
            <button className='btn btn-warning shadow-none border mfhs' onClick={() => settempNotic(true)}><i class="bi bi-plus"></i>Notice</button> </p>

          {/* create notic frorm */}
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>


                <div class="modal-body">

                  {/*  start model-form  design*/}

                  <div className='annouce-container mb-3 mt-2 mt-md-5'>
                    <div className='annouce-child-container '>

                      <form onSubmit={ahandleSubmit}>
                        <div className='close-icone' onClick={() => settempAnnounce(false)}><i class="bi bi-x-circle-fill"></i></div>
                        <textarea class="form-control shadow-none" type='text' id='message' name='message' rows="5" onChange={ahandleonChnage} placeholder='write annoucement here...' required></textarea>
                        {/* <button className='btn btn-warning mt-2 pt-2 ' type='submit'>publish</button> */}


                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button className='btn btn-warning mt-2 pt-2 ' type='submit'>publish</button>
                        </div>
                      </form>

                    </div>
                  </div>

                  {/* 
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div> */}
                </div>
              </div>

            </div>
          </div>
          {/*  End model-form  design*/}



          {
            tempNotic && (

              <div className='annouce-container mb-5 mt-2 mt-md-5 '>
                <div className='notic-child-container shadow  bg-light px-3 py-4'>

                  <form onSubmit={nhandleSubmit}>
                    <button className='close-icone btn btn-default' onClick={() => settempNotic(false)}><i class="bi bi-x-square"></i></button>
                    <p>New notic</p>
                    <input type='text' placeholder='add Heading (optinal)' id='heading' name='heading' className="form-control shadow-none mb-2" onChange={nhandleonChnage}></input>


                    <textarea className="form-control shadow-none mb-2" type='text' id='noticmessage' name='noticmessage' rows="5" onChange={nhandleonChnage} placeholder='write a notic here..' required></textarea>
                    
                    <button className='btn btn-warning mt-2 pt-2 px-5 py-2 ' type='submit'>Publish</button>
                  </form>

                </div>
              </div>
            )
          }

          {/* create annouce-ment form */}

          {
            tempAnnounce && (

              <div className='annouce-container mb-5 mt-2 mt-md-5'>
                <div className='annouce-child-container shadow bg-light px-3 py-4'>

                  <form onSubmit={ahandleSubmit}>
                    <div className='close-icone' onClick={() => settempAnnounce(false)}><i class="bi bi-x-square"></i></div>
                    <p>New annoucement</p>

                    <textarea class="form-control shadow-none" type='text' id='message' name='message' rows="5" onChange={ahandleonChnage} placeholder='write annoucement here...' required></textarea>
                    <label for="exampleFormControlInput1" className="form-label mb-2">Links</label>

                    <input type='text' placeholder='add links (optional)' id='link' name='link' className="form-control shadow-none mb-2" onChange={ahandleonChnage}></input>

                    <button className='btn btn-warning mt-2 pt-2 px-5' type='submit'>Publish</button>
                  </form>

                </div>
              </div>
            )
          }
          {/* End annouce-ment form */}


          {/* list of otic and annouce section */}
          <div className='row mt-5 pt-5 list-annouce-container'>
            <div className='col-12 '>
              <p className='mfhs fs-4 bg1 p-3'>Uploaded Announcement Details</p>
              <div>
                {
                  annouceDatalist[0] ? (

                    annouceDatalist.map((e1) => {
                      return (

                        <div className=' bg-light  p-3 mb-3'>
                          <p>{e1.message}</p>
                          
                          <a href={e1.link} />
                          <Link to={e1.link}>  click</Link>
                          {/* <p>{e1.link}</p> */}
                          <p className='time-letf time'>{formatIndianDate(e1.createdAt)}</p>
                         
                          <div className='time-letf'>
                          <span class="badge badge-dark pull-right me-1"   onClick={() => deleteannouceList(e1._id)}><i class="bi bi-trash"></i>Delete</span>
                            <span class="badge badge-dark pull-right me-1" > Edit</span>

                       
                            </div>
                        </div>
                        

                      )
                    })

                  ) : (
                    <p className='bg-light fs-5 text-primary'>No annocement available</p>
                  )
                }
              </div>
            </div>

            <div className='col-12 '>
              <p className='mfhs fs-4 bg1 p-3'> Uploaded Notic Details</p>
              <div>
                {
                  noticDataList[0] ? (

                    noticDataList.map((e1) => {
                      return (

                        <div className=' bg-light  p-3 mb-3'>
                          <p>{e1.heading}</p>
                          <p>{e1.noticmessage.split('\n')}</p>

                          <p className='time-letf time'>{formatIndianDate(e1.createdAt)}</p>
                          
                          <div className='time-letf'>
                          
                            <span class="badge badge-dark pull-right me-1"  onClick={() => deletenotic(e1._id)}><i class="bi bi-trash"></i>Delete</span>
                            <span class="badge badge-dark pull-right me-1" > Edit</span>

                            </div>
                        </div>

                      )
                    })

                  ) : (
                    <p className='bg-light fs-4 text-primary'>Notic are not available</p>
                  )
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnnouncementPgae
