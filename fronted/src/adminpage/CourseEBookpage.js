import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../CSS/courseebook.css'
import { Card, Button } from 'react-bootstrap';

import { Document, Page } from 'react-pdf';

import Swal from 'sweetalert2'
function CourseEBookpage() {

  const [booklist, setbooklist] = useState([]);

  const [tougle, seTtougle] =useState(false);

  const [updateBook, setupdateBook] = useState({

    subjectName: "",
    topicName: "",
    courseDetails: "",
    pdfbook: null,
  })
  const updateBookChange = (e) => {

    const { value, name, files } = e.target
    if (name === "pdfbook") {

      setupdateBook((prev) => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setupdateBook((prev) => ({
        ...prev,
        [name]: value
      }))
    }

  }
  const ebookHandler = async (e) => {

    e.preventDefault()
    
    const formData = new FormData();
    formData.append("subjectName", updateBook.subjectName);
    formData.append("topicName", updateBook.topicName);
    formData.append("courseDetails", updateBook.courseDetails);
    formData.append("pdfbook", updateBook.pdfbook);


    try {
      const response = await axios.post('/uploadcousermeterial', formData);
      console.log(response);

      console.log(response);
      if (response.data.success) {

        alert(response.data.message)

        seTtougle(false)
        
        fetchData();
      }


    } catch (error) {
      console.error("Error uploading data:", error);
    }

  }



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

   // start delete data from db api intregration

   const deletebooks = async (id) =>{

    const data = await axios.delete('/deletebook/' +id)
    if(data.data.success){
     
      fetchData()
     
      alert(data.data.message)
    }
   }


//Bellow some Dummy api call
  // const [pdfDetails, setPdfDetails] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  const downloadPdf = async (pdfId) => {
    try {



      // const response = await axios.get('http://localhost:8000/downloadbook/${pdfId}');

      const response = await fetch(`${API_BASE_URL}/downloadbook/${pdfId}`);

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = url;
      a.download = `${pdfId}.pdf`; // Set the desired file name
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };


  return (
    <>
      <div className=' coursebook-page-main-cont'>
        <div className='first-section '>
          <div className='container'>
            <div className='row'>

              <div className='col-12  col-md-12 mb-4'>
                  <p className='text-center mfhs mt-4 p-2 fs-4 fw-bold text-bold '>Explore Your Library: Add new Books or Course material <button className='btn btn-warning' onClick={()=> {seTtougle(true)}}>ADD NEW</button></p>

                {
                  tougle && (

                    
                <div className='add-book-container  mt-4 mb-2 px-5 shadow mb-3 p-lg-4 p-md-4 p-3'>
                <div className='mb-4'>
                <button className='btn btn-default pull-right' onClick={()=> {seTtougle(false)}}><i class="bi bi-x-square"></i></button>
                </div>
                <form onSubmit={ebookHandler} enctype="multipart/form-data">
                  <div className="form-row">
                    <div className="col-md-6 mb-2">
                      <label className='mfhs'>Subject name</label>
                      <input type="text" className="form-control" name='subjectName' onChange={updateBookChange} placeholder="Enter Subject name" required />
                    </div>
                    <div className="col-md-6 mb-2">
                      <label className='mfhs'>Topic name</label>
                      <input type="text" className="form-control" id="validationDefault02" name='topicName' onChange={updateBookChange} placeholder="Topic name" required />
                    </div>
                    <div className="col-md-12 mb-2">
                      <label className='mfhs'>Course /Subject details</label>
                      <div className="input-group">

                        <input type="text" className="form-control" id='courseDetails' name='courseDetails' onChange={updateBookChange} placeholder="Course Details(Optional)" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div class="mb-2">
                      <input class="form-control" type="file" name='pdfbook' onChange={updateBookChange} required />
                    </div>
                    <div className="form-check">
                      <input className="form-check-input shadow-none" type="checkbox" value="" id="invalidCheck2" required />
                      <label className="form-check-label" for="invalidCheck2">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className='d-grid mx-auto'>
                    <button className="btn btn-warning mfhs" type="submit">Add new book</button>
                  </div>
                </form>

              </div>
                  )
                }
                
              </div>
            </div>


          </div>

        </div>

        <div className='container mb-4'>
          <div className='row'>
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
                    <span class="badge badge-primary pull-right me-2" onClick={()=>deletebooks(pdf._id)}><i class="bi bi-trash"></i>Delete</span>

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
      </div>
    </>
  )
}

export default CourseEBookpage
