import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../CSS/courseebook.css'
import { Card, Button } from 'react-bootstrap';

function EductContentpage() {

  const [tougle, seTtougle] =useState(false);

  const [pdfDetails, setPdfDetails] = useState([]);

  const API_BASE_URL = 'http://localhost:8000/uploadspdf';

  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getpdgbookdetails');
        setPdfDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching PDF details:', error);
      }
    };
    useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='bg-light  container-fluid'>
        <div className='row'>
          <div className='container'>
          <div className='col-12   pt-4 mt-2   pb-3' data-aos="fade-right">
            <h2 className=' mfhs'>Access PDF Notes</h2>
            <p className='sfhs'>
              Welcome to our educational resource page. Download your study materials in the form of PDF below.
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className='container mb-4'>
          <div className='row'  data-aos="fade-up">
            <p className='sfhs fw-bold fs-4 mt-4'>Available Books</p>




            {
              pdfDetails[0] ? (

                pdfDetails.map((pdf, index) => (
                  <div className='col-md-4 col-lg-4 shadow mb-3 p-2 sfhs'>
                    <p className='fs-4 mfhs'>{pdf.subjectName}</p>
                    <p>{pdf.topicName}</p>
                    <p>{pdf.courseDetails}</p>
                    <p>
                      <a href={`http://localhost:8000${pdf.pdfbook}`} download={`pdf${index + 1}.pdf`} >downloadURL</a>
                    </p>
                    {/* <span class="badge badge-primary pull-right me-2" ><i class="bi bi-trash"></i>Delete</span> */}

                  </div>
                ))
              ) : (
                <p>Book record not found</p>
              )

            }



            <div>

            </div>

        

        </div>
      </div>
    </>
  );
}

export default EductContentpage;
