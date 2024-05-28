import React, { useEffect, useState } from 'react'
import '../CSS/updates.css'
import '../CSS/userUpdates.css'
import Swal from'sweetalert2'
import axios from 'axios';

function UpdatesPage() {

    const [updateTheme, setUpdateTheme] = useState(false);
    const [updateDatalist, setupDatalist] = useState([])

    const [updateData, setupdateData] = useState({

        heading: "",
        updatesdesc: "",
        image: null

    })

    const updateonChnage = (e) => {

        const { value, name, files } = e.target

        if (name === "image") {
            setupdateData((prev) => ({
                ...prev,
                [name]: files[0]  // Use files array for file input
            }));
        } else {
            setupdateData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
      
    }



    const updateHandler = async (e) => {

        e.preventDefault()

        const formData = new FormData();
        formData.append("heading", updateData.heading);
        formData.append("updatesdesc", updateData.updatesdesc);
        formData.append("image", updateData.image);

        try {
            const response = await axios.post('/createUpdates', formData);
            console.log(response);

            if (response.data.success) {
                setUpdateTheme(false);
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error uploading data:", error);
        }
    
    }

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


    // start delete data from db api intregration

    const deleteupdateList = async (id) => {

        // const data = await axios.delete('/deleteUpdate/' + id)
        // if (data.data.success) {

        //     fetchUpdates()
        //     alert(data.data.message)
        // }

        try {

            const result = await Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            });
      
            if (result.isConfirmed) {
              const response = await axios.delete('/deleteUpdate/' + id)
      
              if (response.data.success) {
                // Use SweetAlert for success
                Swal.fire({
                  title: 'Deleted!',
                  text: response.data.message,
                  icon: 'success'
                });
                fetchUpdates()
              } else {
                // Use SweetAlert for failure
                Swal.fire({
                  title: 'Error!',
                  text: response.data.message,
                  icon: 'error'
                });
              }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // Handle cancellation
              Swal.fire({
                title: 'Cancelled',
                text: 'Your deletion was cancelled',
                icon: 'info'
              });
            }
          } catch (error) {
            // Use SweetAlert for unexpected errors
            Swal.fire({
              title: 'Error!',
              text: 'An unexpected error occurred. Please try again later.',
              icon: 'error'
            });
          };
      
      
    }
    const formatIndianDate = (dateString) => {
        const options = { timeZone: 'Asia/Kolkata' };
        return new Date(dateString).toLocaleString('en-IN', options);
      };

    return (
        <>
            <div className='main-update-container'>
                <div className='container '>

                    <p className='admin-updates-headline-text text-center pt-3 pt-md-5 mb-2 mfhs'>
                    Knowledge Hub: Elevate Student Experience with IT and Educational Updates
                    </p>
                    <p className='p-2 sfhs'>
                    Admin Updates Page: Share IT breakthroughs, college happenings, and educational insights directly with students. Contribute to a vibrant learning community through impactful blogs, 
                    shaping a connected and informed student experienc.
                    </p>
                    <div className='text-center '>
                        <button className=' btn-updates shadow-none mt-2 mb-1 sfhs ' onClick={() => setUpdateTheme(true)}><i class="bi bi-plus"></i>Add new Update</button>

                    </div>

                    {/* create a upload form */}

                    {
                        updateTheme && (



                            <div className='updates-container mb-4 mt-2 mt-md-2'>
                                <div className='updates-child-container shadow bg-light p-3'>

                                    <form onSubmit={updateHandler} enctype="multipart/form-data" >
                                        <div className='close-icone' onClick={() => setUpdateTheme(false)}><i class="bi bi-x-square"></i></div>


                                        <label for="exampleFormControlInput1" className="form-label mb-2">Headline</label>
                                        <input type="text" className="form-control shadow-none" id="heading" name='heading' onChange={updateonChnage} placeholder="Write headline about post" required />


                                        <input type="file" className="form-control shadow-none mt-3" id="image" name='image' onChange={updateonChnage} />

                                        <label for="exampleFormControlTextarea1" className="form-label mb-2">Description</label>
                                        <textarea className="form-control shadow-none" id="updatesdesc" name='updatesdesc' placeholder='Give brief description about post' onChange={updateonChnage} rows="3" required></textarea>



                                        <button className='btn btn-warning mt-3 px-5 sfhs '>Submit</button>


                                    </form>

                                </div>

                                {/* Start fetch data section */}



                            </div>
                        )
                    }




                    {/* </div> */}

                    <div className='row '>
                    <div className='mb-5'>
                                <p className='fetch-update-headline fhs'>View Uploaded Updates </p>
                            </div>
                       
                                {
                                    updateDatalist[0] ? (

                                        updateDatalist.map((e1) => {
                                            return (

                                                <div className='inner-update-cont col-lg-12 col-md-12 p-3 mb-4 me-2 mt-2'>

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
                                                    <span type="button" class="badge badge-primary shadow-none pull-right me-2"><i class="bi bi-pencil-square"></i></span>
                                                    <span type="button" class="badge badge-primary shadow-none pull-right me-2" onClick={() => deleteupdateList(e1._id)}><i class="bi bi-trash"></i></span>

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
                            {/* </div>

                        </div> */}

                    </div>


                </div>
            </div>
        </>
    )
}

export default UpdatesPage
