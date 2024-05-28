import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Glarrypage() {

    const [tougle, seTtougle] = useState(false);

    const [glarrydata, seTglarrydata] = useState({



        image: null,
        aboutpost: "",
    })

    const glarryonChange = (e) => {

        const { value, name, files } = e.target

        if (name === "image") {
            seTglarrydata((prev) => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            seTglarrydata((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }

    const glarryHandler = async (e) => {

        e.preventDefault()

        const formData = new FormData();
        formData.append("image", glarrydata.image);
        formData.append("aboutpost", glarrydata.aboutpost);

        try {

            const responce = await axios.post('/uploadglarry', formData);


            if (responce.data.success) {
                seTtougle(false);
                fetchData();
                alert(responce.data.message);
            }
        } catch (error) {
            console.error('error Uploading data');
        }
    }

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

// delete glarry data

const deletehandler = async (id) =>{

    try {
        
        const responce = await axios.delete('/deleteglarry/'+id)
        if(responce.data.success){
            fetchData()
            alert(responce.data.message);
        }
    } catch (error) {
        
        alert(error);

    }
}
 
    return (
        <>
            <div className='container-fluid '>
                <div className='bg-light'>
                    <p className='text-center mfhs fw-bold  p-4 fs-3'>Explore Your Glarry: Add new post or picture  <button className='btn btn-warning' onClick={() => { seTtougle(true) }}>ADD NEW</button> </p>
                </div>
                <div className='p-3'>

                    {
                        tougle && (

                            <div className='updates-container mb-4 mt-2 mt-md-2'>
                                <div className='updates-child-container shadow bg-light p-3'>

                                    <form onSubmit={glarryHandler} enctype="multipart/form-data" >
                                        <div className='close-icone' ><i class="bi bi-x-square" onClick={() => { seTtougle(false) }}></i></div>

                                        <label className="form-label mb-2">Chooose image</label>

                                        <input type="file" className="form-control shadow-none " required id="image" name='image' onChange={glarryonChange} />

                                        <label className="form-label mb-2">Description</label>
                                        <input className="form-control shadow-none" id="updatesdesc" name='aboutpost' placeholder='Write single-line about post (Optional)' onChange={glarryonChange} rows="3" ></input>



                                        <button className='btn btn-warning mt-3 px-5 sfhs '>Upload</button>


                                    </form>

                                </div>

                            </div>

                        )
                    }

                </div>
                <div className=''>
                    <div className='row upload-image-conatiner pb-5 pt03'>


                        {
                            glarryDetailslist[0] ? (

                                glarryDetailslist.map((e1, index) => (
                                    <div className='col-md-4 col-lg-4 upload-g-inner p-1 mb-2  shadow'>
                                        <div className='m-0'>
                                            <div className='bg-img'>
                                                <img width="100%" height="220px" border-radius="10px" src={`http://localhost:8000/${e1?.image}`} />
                                            </div>


                                            <p className='mt-1 p-2'>{e1.aboutpost}</p>
                                        </div>

                                        <span class="badge badge-primary pull-right me-2" onClick={ ()=> deletehandler(e1._id)}>Delete</span>
                                       

                                    </div>
                                ))
                            ) : (
                                <p>Fetching  data  not found</p>
                            )

                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Glarrypage
