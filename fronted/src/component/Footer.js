import React from 'react'
import '../CSS/Footer.css'
import icon from '../Images/cimageicon.jpeg'
function Footer() {
    return (
        <>
            <div className='container-fluid bg-light footer-text'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-3 col-md-3'>

                            <div className='f-bg-txt-container py-lg-3 py-md-3'>
                                <p className='f-headline-txt fs-5 '>ABOUT US</p>
                                <div className='f-icon-div mb-3'>
                                <img className='img-fluid' src={icon} alt='loading..'/>
                                </div>
                                <p className='f-cont-txt-style'>Best BCA College in Patna Bihar offering an outstanding Job Placement.
                                     It is recognized as No.1 College in Patna Bihar for IT & Management Courses such
                                      as BCA, BBA, BBM, BSc.IT etc. Over the years It has an excellent campus placement
                                       record.  CIMAGE is affiliated to Aaryabhatta Knowledge University (AKU) &
                                        Patliputra University (PPU). Popularly known as best BBA college. 
                                        It Achieved best B-School of East India award by ASSOCHAM. 
                                    CIMAGE is the only remote center of IIT Bombay in Bihar. </p>

                            </div>
                        </div>

                        <div className='col-12 col-lg-3 col-md-3'>

                            <div className='f-bg-txt-container py-lg-3 py-md-3'>
                                <p className='f-headline-txt fs-5 '>COURSES</p>
                                <p className='f-link pt-2'><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>BCA</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>B.Sc-IT</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>BBA</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>BBM</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>B.Com (p)</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>PGDM</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>SiteMap</a></p>
                            
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 col-md-3'>

                            <div className='f-bg-txt-container py-lg-3 py-md-3'>
                                <p className='f-headline-txt fs-5'>QUICK LINKS</p>
                                <p className='f-link pt-2 '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>SiteMap</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>SiteMap</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>SiteMap</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>SiteMap</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>SiteMap</a></p>
                                <p className='f-link '><i className="bi bi-arrow-right me-2"/><a href='https://www.cimage.in/best-bca-college-in-patna/'>SiteMap</a></p>

                            </div>
                        </div>
                        <div className='col-12 col-lg-3 col-md-3'>

                            <div className='f-bg-txt-container py-lg-3 py-md-3'>
                                <p className='f-headline-txt fs-5'>REACH US</p>
                            </div>
                        </div>


                    </div>

                </div>
             
            </div>
          
            
                
        </>
    )
}

export default Footer
