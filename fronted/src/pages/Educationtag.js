import React from 'react'
import '../CSS/rules.css'
//import directorSirDp from '../Images/director-sir.jpeg'
import education from '../Images/online-learning.png'
import skills from '../Images/self-development.png'
import success from '../Images/success.png'
function Educationtag() {
    return (
        <>
        {/* container  */}
        <div className=''>
            <div className='row mt-lg-5 '>
                <div className=' col-12 col-md-4 col-lg-4 mb-3 ' >

                    <div className='Card-section p-1 shadow ' data-aos="zoom-in-left">
                        <div className='img-circle mt-2'>
                            <img className='img-fluid p-5' src={education}></img>

                        </div>
                        <h3 className='mt-3'>Knowledge</h3>
                        <p>knowledge is the currency of progress, shaping the way we perceive, interact with, and contribute to the world. It empowers individuals to reach their full potential and equips societies with the tools needed to address global challenges. Embracing a lifelong pursuit of knowledge is not just a personal enrichment but a collective investment in a brighter, more enlightened future.</p>
                    </div>

                </div>
                <div className=' col-md-4 col-lg-4 mb-3'>
                    <div className='Card-section p-1 shadow'>

                        <div className='img-circle mt-2'>
                            <img className='img-fluid p-5' src={skills}></img>

                        </div>
                        <h3 className='mt-3'>Skills</h3>
                        <p>These competencies empower individuals to effectively navigate their professional and personal lives. Whether technical, interpersonal, or creative, skills are the tangible outcomes of learning and development. They enable individuals to contribute meaningfully to their chosen fields, fostering productivity, innovation, and collaboration.</p>
                    </div>

                </div>
                <div className=' col-md-4 col-lg-4 '>
                    <div className='Card-section p-1 shadow' data-aos="zoom-in-right">
                        <div className='img-circle mt-2'>
                            <img className='img-fluid p-5' src={success}></img>
                        </div>
                        <h3 className='mt-3'>Success</h3>
                        <p>Success is not just a destination; it's a journey defined by resilience, determination, and an unwavering belief in one's capabilities. It's about turning challenges into opportunities, pushing boundaries, and discovering the extraordinary within the ordinary. Embrace the power of your dreams, work passionately, and let success be the symphony of your efforts, creating a melody that resonates with the rhythm of your accomplishments</p>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Educationtag
