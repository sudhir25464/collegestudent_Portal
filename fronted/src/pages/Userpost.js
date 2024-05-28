import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import '../CSS/Studentprofile.css'

import axios from 'axios'


function Userpost() {

  const [authstudentList, setauthstudentList] = useState([]) // for getstudentprofile


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


  //   const toastTrigger = document.getElementById('liveToastBtn');
  //   const toastLiveExample = document.getElementById('liveToast');
  // var bootstrap
  //   if (toastTrigger) {
  //     const toastBootstrap = new bootstrap.Toast(toastLiveExample);
  //     toastTrigger.addEventListener('click', () => {
  //       toastBootstrap.show();
  //     });
  //   }

  return (
    <>
      <div className='container-fluid bg-light'>
        <div className='container'>
          <div className='row pt-5'>
            {/* <p className='mfhs alert alert-danger p-4 mt-4'>Empowering Connections: Introducing the GetHelp Page for Students - Tap into Senior Wisdom for Support and Guidance!</p> */}
            <div className='col-12 col-md-8 mb-3 bg-grident-card ' data-aos="fade-right">


              <p className='mfhs fs-4 p-2'>
              Unlock Success with GetHelp: Connect, Senior students ready to offer assistance and guidance.
              </p>
              {/* <details>
                <summary className='mfhs'>more detail</summary> */}
                <p className='about-sumarry'>
                  Discover a valuable resource at your fingertips! Our GetHelp page connects you with authorized senior students ready to offer assistance and guidance. Whether you have questions about academics, career choices, or university life, access support through various channels such as email, WhatsApp, and LinkedIn. Leverage the wisdom of experienced seniors to navigate your academic journey with confidence. Connect, learn, and thrive with the GetHelp page – because success is a collaborative effort!
                 </p>
              {/* </details>  */}

              {/* <p className='sfhs alert '>
                Discover a valuable resource at your fingertips! Our GetHelp page connects you with authorized senior students ready to offer assistance and guidance. Whether you have questions about academics, career choices, or university life, access support through various channels such as email, WhatsApp, and LinkedIn. Leverage the wisdom of experienced seniors to navigate your academic journey with confidence. Connect, learn, and thrive with the GetHelp page – because success is a collaborative effort!
                <button type="button" class="badge badge-primary" id="liveToastBtn">Learn More</button>
              </p> */}


            </div>

            <div className='col-12 col-md-4 mb-3 '>

              <div className=' bg-img-auth-section' data-aos="fade-up"></div>

            </div>
          </div>


          {/* strat body of toast  */}
          <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="..." class="rounded me-2" alt="..." />
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
          {/* End body of toast  */}


        </div>

</div>
        <div className='container-fluid mt-4 bg-white'>
          {/* <div className='get-student-profile-cont'> */}



          <div className='row' data-aos="fade-up">







            {
              authstudentList[0] ? (

                authstudentList.map((e, index) => {
                  return (

                    <div className='col-md-4  col-lg-4  mb-2' key={index} >
                      <div className='auth-profile-inner-card shadow-lg p-1 mb-5 bg-body rounded'>
                        <div className='img-profile-cont'>
                          <img className='img-profile' width="140px" src={`http://localhost:8000/${e?.image}`} />
                        </div>
                        <div className='auth-profile-text-cont p-3'>
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
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <p>No datta</p>
              )
            }
          </div>
        </div>

      
    </>
  )
}

export default Userpost
