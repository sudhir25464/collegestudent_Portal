import React, { useEffect } from 'react'
import '../CSS/userUpdates.css'
import axios from 'axios'
import { useState } from 'react';


function Userupdate() {

  const [updateDatalist, setupDatalist] = useState([])

  //fetch data  from db

  const fetchUpdates = async () => {

    const data = await axios.get('/getupadtesData')
    if (data.data.success) {

      setupDatalist(data.data.data)
    }

  }
  useEffect(() => {
    fetchUpdates()
  }, [])

  const formatIndianDate = (dateString) => {
    const options = { timeZone: 'Asia/Kolkata' };
    return new Date(dateString).toLocaleString('en-IN', options);
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row pt-5 mb-md-5 mb-lg-5'>
            <div className='col col-md-7  mb-2' data-aos="fade-right">
              <p className='mfhs user-updates-h-txt'>Stay Informed: College Updates, Tech Trends, & News in One Place"</p>
              <p className='p-1 sfhs'>

                Offers a comprehensive platform for college students to access the latest updates from their college, IT technology news, and new trends in the tech world. By providing a user-friendly interface, students can easily browse through college updates, IT technology news, and new trends.

              </p>
            </div>
            <div className='col-md-5 user-update-img-cont' data-aos="fade-up">
              <img src='https://res.cloudinary.com/dmcytmsit/image/upload/v1706880141/StudentPortalMidea/Stay-College-News_vnrybx.png'></img>

            </div>



          </div>
          <div className='row' data-aos="fade-up">


            {
              updateDatalist[0] ? (

                updateDatalist.map((e1) => {
                  return (

                    <div className='inner-update-cont col-lg-12 col-md-12 p-3 mb-4 me-2 mt-2' >

                      <div className='row'>
                        <div className='col-lg-5 col-md-5'>
                          <div className='bg-img'><img width="100%" height="300px" border-radius="10px" src={`http://localhost:8000/${e1?.image}`} /></div>
                          {console.log(`http://localhost:8000/${e1.image}`)}
                        </div>

                        <div className='col-md-7 col-lg-7'>
                          <p className='fetch-update-inner-headline mfhs pt-1'>{e1.heading}</p>
                          <p className='time-letf time user-fetch-desc-update-text sfhs'>{e1.updatesdesc}</p>

                          <div className='time-details-inner-cont'>
                            <p className='time-details'>{formatIndianDate(e1.createdAt)}</p>

                          </div>
                          {/* <span type="button" class="badge badge-primary shadow-none pull-right me-2"><i class="bi bi-pencil-square"></i></span> */}
                          {/* <span type="button" class="badge badge-primary shadow-none pull-right me-2" onClick={() => deleteupdateList(e1._id)}><i class="bi bi-trash"></i></span> */}

                        </div>
                      </div>
                      {/* <div>{e1.image}</div> */}




                    </div>

                  )
                })

              ) : (
                <p className='bg-light fs-4 text-primary'>Not aviable any Updates</p>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Userupdate
