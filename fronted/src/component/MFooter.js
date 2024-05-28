import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function MFooter() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted footer-background'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3 text-left" />
                CIMAGE COLLEGE PATNA
              </h6>
              <p className='text-left'>

                Undergraduate Courses in Management and IT at CIMAGE provide a comprehensive education in fields such as BBM, BCA, and B.Sc.IT, equipping students with a competitive edge. Add-on courses enhance skills for campus placements, ensuring readiness for careers. The institution boasts world-class infrastructure fostering creativity, collaboration, and academic excellence, located strategically at Boring Road, Patna. Explore the Student Portal for resources and engage with the vibrant community for a journey of knowledge and growth at CIMAGE.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Links</h6>



              <p>
                <a href='https://cimage.in/cimage-professional-college' className='text-reset text-left'>
                  CIMAGE Professional College
                </a>
              </p>
              <p>
                <a href='https://cimage.in/cimage-college' className='text-reset text-left'>
                  CIMAGE
                </a>
              </p>
              <p>
                <a href='https://cimage.in/catalyst-college' className='text-reset text-left'>
                  Catelyst College
                </a>
              </p>
              <p>
                <a href='https://cimage.in/admissions' className='text-reset'>
                  CIMAGE Affiliation
                </a>
              </p>
              <p>
                <a href='https://cimage.in/cimage-fee-structure' className='text-reset'>
                  CIMAGE Fee Structure
                </a>
              </p>
              <p>
                <a href='https://cimage.in/student-credit-card' className='text-reset'>
                  Student Credit Card
                </a>
              </p>
              <p>
                <a href='https://cimage.in/student-credit-card' className='text-reset'>
                  Career
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Course</h6>
              <p>
                <a href='#!' className='text-reset'>
                  CA (Under AKU & PU)




                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                BBA (Under AKU)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                BBM (Under PU)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                B.Com (P) (Under AKU)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                B.Sc-IT (Under PU)

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                PGDM (Under AIMA)
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                S.K. Puri Park, Boring Road, Patna
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@cimage.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91-9835024444
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />+91-9835024444
                </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href=''>
          sudhir@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
}