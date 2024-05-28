import React, { useEffect, useState } from 'react'
import '../CSS/userdashBord.css'
import img1 from '../Images/PPU AKU.png'
import img2 from '../Images/PPU AKU (1).png'
import axios from 'axios'



function UserdashbordHeader() {

  const [homeslider, sethomeslider] = useState([]);
  const gethomesliderimg = async () => {

    try {
      const responce = await axios.get('/getuthslider')
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


  const [annouceDatalist, setannounceDatalist] = useState([])
  const [noticDataList, setNoticDatalist] = useState([])


  // fetch annouced data
  const fetchAnnouceData = async () => {

    const data = await axios.get('/getannouncement')
    if (data.data.success) {
      setannounceDatalist(data.data.data)

    }
  }
  useEffect(() => {
    fetchAnnouceData()
  }, [])

  // getch notic here
  const fetchNoticData = async () => {

    const data = await axios.get('/getnoticDetails')
    if (data.data.success) {
      setNoticDatalist(data.data.data)

    }
  }
  useEffect(() => {
    fetchNoticData()
  }, [])

  const formatIndianDate = (dateString) => {
    const options = { timeZone: 'Asia/Kolkata' };
    return new Date(dateString).toLocaleString('en-IN', options);
  };

  return (
    <>
      <div className='container-fluid bg-light'>
        <div className='container'>
          <div className='row pt-5 mb-5'>
            <div className='col-12 col-md-4 col-lg-4 bg-light'>
              <div className='card-student p-md-2 p-1' data-aos="fade-right">
                <p className='fs-2 mt-3 an-heading fhs'>Campus Updates and Announcements</p>
                <p className='sfhs'>Welcome to our central hub for campus updates and announcements! Stay informed about important events, academic deadlines, and exciting news tailored specifically for our students</p>
              </div>
              <p className='heding-event pt-3' data-aos="fade-right">Upcoming Events</p>
              <p className='mt-3 sfhs' data-aos="">
                Get ready for a series of exciting events lined up for the semester. From cultural festivals to academic workshops, there's something for everyone. Check the calendar for dates and details.
              </p>

            </div>
            <div className='col-12 col-md-8 col-lg-8'>


              <div className='main-bg'>



                <div className='img-slider' >

                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {homeslider.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img height="300px" src={`http://localhost:8000/${image?.image}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* youtube link */}
                <div className="embed-responsive embed-responsive-16by9 mt-1">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=JfIjyJJ7SO8&ab_channel=CIMAGEPATNA" allowfullscreen></iframe>
                </div>

                <div className='main-imp-anouncement  mt-3 mt-md-3'>
                  <p className='an-txt px-2 pt-2 ' data-aos="fade-left">Annoucement</p>
                  <div data-aos="fade-left">
                    {
                      annouceDatalist[0] ? (

                        annouceDatalist.map((e1) => {
                          return (

                            <div className='a-inner-container m-2 p-2 mb-3 px-3 ' >
                              <p className='pt-3'>{e1.message}</p>
                              <p className='time'>{formatIndianDate(e1.createdAt)}</p>
                            </div>

                          )
                        })

                      ) : (
                        <p className='bg-light  null-data-text-message p-3 sfhs'>Announcement is not available</p>
                      )
                    }
                  </div>


                  {/* Fetch notic data here */}
                  <p className='an-txt px-2 mt-2' data-aos="fade-left">Notic</p>

                  <div >
                    {
                      noticDataList[0] ? (

                        noticDataList.map((e1) => {
                          return (

                            <div className='a-inner-container m-2 p-2 mb-3'  >
                              <p className='mfhs notic-inner-headline'>{e1.heading}</p>
                              <p>{e1.noticmessage}</p>

                              <p className='time'>{formatIndianDate(e1.createdAt)}</p>
                            </div>

                          )
                        })

                      ) : (
                        <p className='bg-light  text-primary p-3'>Announcement is not available</p>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserdashbordHeader
