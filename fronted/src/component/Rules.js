import React from 'react'
import '../CSS/rules.css'

import studentgp1 from '../Images/student-gp-2.webp'
import studentgp2 from '../Images/cimage-student-group-photo.jpg'
import studentgp3 from '../Images/student-img-3.jpg'
import Educationtag from '../pages/Educationtag'
import Cardprofile from '../pages/Cardprofile'

import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



function Rules() {

    const [homeslider, sethomeslider] = useState([]);
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

    return (
        <>
            <div className='container-fluid pb-5'>
                <div className='container'>

                    <div className='row'>
                        <p className='gradent-haeder mt-4 pt-4  ' data-aos="fade-down-right"> Importent Guidlines </p>
                        <p className='text-center mb-5 px-1 p-md-5 mt-2 p-borger mfhs' data-aos="flip-left">

                            Students failing to meet the minimum attendance requirements may face consequences such as being barred from examinations. Respectful and courteous behavior is expected from all students towards faculty, staff, and fellow students. Any form of disruptive behavior, harassment, bullying, or violence will not be tolerated. Adherence to a specified dress code is mandatory. Students are expected to dress modestly and professionally, as per the college guidelines.
                        </p>
                        <Educationtag />


                        <div className='col-12 px-1  col-md-6 col-lg-6 mb-5 pt-5 '>
                            <div className=' mt-lg-2  p-1 p-lg-4 p-md-4  home-summary-font' data-aos='fade-right'>
                                <p className='me-1'>
                                    <i class="bi bi-check2-circle me-1 fs-5 text-success"></i>

                                    Your journey is unique, and your success is not determined by the accomplishments of others. Be curious, delve into diverse subjects, and let your education unfold as a journey of self-discovery. Your college experience is a canvas eagerly awaiting the strokes of your hard work, dedication, and dreams.

                                    <br />
                                    <br />
                                    <i class="bi bi-check2-circle me-1 fs-5 text-success"></i> As you start this exciting chapter, dream big, work hard, and celebrate the small wins. College isn't just a step toward a career; it's a canvas where you create the story of your success. Embrace challenges, enjoy the journey, and let each moment build the incredible story of your college life.</p>

                            </div>
                        </div>
                        <div className='col-12  px-1 col-md-6 col-lg-6  mb-3 pt-5 mt-5' data-aos="fade-down">
                            <div className='img-dp-box px-lg-3 pc-md-3 mt-lg-2 '>
                                <div className='home-img-slider'>

                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                      


                                        <div className="carousel-inner">
                                            {homeslider.map((image, index) => (
                                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                    <img  src={`http://localhost:8000/${image?.image}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                     
                               
                              
                            </div>
                        </div>

                    </div>


                </div>


            </div>


            <Cardprofile />
            {/* <Educationtag/> */}




        </div >


            </div >

        </>



    )
}

export default Rules
