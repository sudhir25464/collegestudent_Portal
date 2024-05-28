import React from 'react'

function Cardprofile() {
  return (
    <>
      <div className='row mt-5 shadow mb-5 py-5 card-contoaner-out-layer' data-aos="fade-right">
        <div className='col-12 col-md-3 col-lg-3  main-card-container p-2 '  >

          <div className='card-photo'>
            <img src='https://res.cloudinary.com/dmcytmsit/image/upload/v1709295340/Prof.-Basant-Kumar-Agrawal-400x400_zkxwzc.jpg'></img>
          </div>
          <p className='pt-2 text-center'>Prof. Basant Kumar Agrawal <br />
            (Chairman, CIMAGE Group of Institutions)</p>

        </div>
        <div className='col-12 col-md-3 col-lg-3  main-card-container p-2 ' >

          <div className='card-photo'>
            <img src='https://res.cloudinary.com/dmcytmsit/image/upload/v1709295340/Director-CIMAGE-Group-of-Institutions-1024x683_eckrqy.jpg'></img>
          </div>
          <p className='pt-2 text-center'>Prof. Neeraj Agrawal<br />
            (Director, CIMAGE Group of Institutions)</p>

        </div>

        <div className='col-12 col-md-3 col-lg-3  main-card-container p-2' >

          <div className='card-photo'>
            <img src='https://res.cloudinary.com/dmcytmsit/image/upload/v1709295340/Dean-Prof-Neeraj-Poddar_ozjm4v.png'></img>
          </div>
          <p className='pt-2 text-center'>Prof. Neeraj Poddar <br />
            (Dean, CIMAGE)</p>

        </div>

        <div className='col-12 col-md-3 col-lg-3  main-card-container p-2' >

          <div className='card-photo'>
            <img src='https://res.cloudinary.com/dmcytmsit/image/upload/v1709296765/Amit-Shukla_hrexd2.jpg'></img>
          </div>
          <p className='pt-2 text-center'>Amit Shukhla<br />
            (HOD , CIMAGE Group of Institutions)</p>
        </div>
      </div>


    </>
  )
}

export default Cardprofile
