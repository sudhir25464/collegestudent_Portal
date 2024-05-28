import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
function Galarry() {


  const [glarryDetailslist, setglarrylist] = useState([]);

  // const API_BASE_URL = 'http://localhost:8000/uploads';


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getglarrydata');
      setglarrylist(response.data.data);
    } catch (error) {
      console.error('Error fetching PDF details:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className='container-style-box mt-lg-4 mt-md-4 mt-3'>
        <p className='con-txt p-5' data-aos="flip-left">Gallery</p>
      </div>
      <div className='container-fluid'>

        <div className=''>
          <div className='row'>
            <div className='col'>

              <div className=''>
                <div className='row upload-image-conatiner pb-5 '  data-aos="fade-up">


                  {
                    glarryDetailslist[0] ? (

                      glarryDetailslist.map((e1, index) => (
                        <div className='col-md-4 col-lg-4  p-2 mb-2 shadow'>
                          <div className='m-0'>
                            <div className='bg-img'>
                              <img width="100%" height="220px" border-radius="30px" src={`http://localhost:8000/${e1?.image}`} />
                            </div>


                            <p className='mt-1 p-2'>{e1.aboutpost}</p>
                          </div>


                        </div>
                      ))
                    ) : (
                      <p>Fetching  data  not found</p>
                    )

                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Galarry
