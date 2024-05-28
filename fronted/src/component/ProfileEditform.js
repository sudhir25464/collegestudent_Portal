import React from 'react'

const ProfileEditform=(registerHandler , data, setDataedit , rest)=> {
    return (
        <>

            {/*
             <div className="col-lg-8 col-md-8   registation-style">

               


                <form onSubmit={registerHandler}>
                    <div className='row '>



                        <div className='col-12 col-lg-12 col-md-12'>


                            <div class="mb-3 flex-row pt-3">
                                <label for="exampleFormControlInput1" class="form-label">College ID </label>
                                <input type="number" class="form-control" placeholder="eg : - 345490 "
                                    value={data.collegeId} onChange={(e) => setDataedit({ ...data, collegeId: e.target.value })}
                                />
                            </div>

                            <div class="mb-3 flex-row">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" placeholder="Enter your name"
                                    value={data.fullName} onChange={(e) => setDataedit({ ...data, fullName: e.target.value })}

                                />
                            </div>

                            <div class="mb-3 flex-row">
                                <label for="exampleFormControlInput1" class="form-label">Father's Name</label>
                                <input type="text" class="form-control" placeholder="Enter Father's Name"
                                    value={data.fathersName} onChange={(e) => setDataedit({ ...data, fathersName: e.target.value })}

                                />
                            </div>


                            <div class="mb-3 flex-row">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="example@gmail.com"

                                    value={data.email} onChange={(e) => setDataedit({ ...data, email: e.target.value })}

                                />
                            </div>

                            <div class="mb-3 flex-row">
                                <label class="form-label">Contact</label>
                                <input type="number" class="form-control" placeholder="Enter your number"

                                    value={data.contact} onChange={(e) => setDataedit({ ...data, contact: e.target.value })}

                                />
                            </div>


                            <div class="mb-3 flex-row">
                                <label class="form-label">Select Gender</label>
                                <select className="form-control text-dark" id="gender"
                                    value={data.gender} onChange={(e) => setDataedit({ ...data, gender: e.target.value })}

                                >
                                    <option className='text'>--Select--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>


                                </select>
                            </div>

                      


                            {/* <div className='col-12  col-lg-6 col-md-6'> */}


{/*  
                            <div class="mb-3 flex-row">
                                <label class="form-label">Select Univercity</label>
                                <select className="form-control  " id="gender"

                                    value={data.university} onChange={(e) => setDataedit({ ...data, university: e.target.value })}

                                >
                                    <option className='p-2' >--Select--</option>
                                    <option value="PPU">PPU</option>
                                    <option value="AKU">AKU</option>


                                </select>
                            </div>

                            <div class="mb-3 flex-row">
                                <label for="exampleFormControlInput1" class="form-label">Select Course</label>
                                <select className="form-control " id="gender"

                                    value={data.course} onChange={(e) => setDataedit({ ...data, course: e.target.value })}

                                >
                                    <option >--Select--</option>
                                    <option value="bca">BCA</option>
                                    <option value="bscit">B.Sc-IT</option>
                                    <option value="bba">BBA</option>
                                    <option value="bcom">B.Com</option>
                                    <option value="pgdm">PGDM</option>

                                </select>
                            </div>
                            <div class="mb-3 flex-row">
                                <label class="form-label">DOB</label>
                                <input type="date" class="form-control" placeholder="Date of Birth"

                                    value={data.dob} onChange={(e) => setDataedit({ ...data, dob: e.target.value })}

                                />
                            </div>

                            <div class="mb-3 flex-row">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="password must be 8 charater"
                                    value={data.password} onChange={(e) => setDataedit({ ...data, password: e.target.value })}

                                />
                            </div>

                            <div class="mb-3 flex-row">
                                <label class="form-label">Conform Password</label>
                                <input type="password" class="form-control" placeholder="Conform-Password"

                                    value={data.confirmPassword} onChange={(e) => setDataedit({ ...data, confirmPassword: e.target.value })}

                                />
                            </div>
                            <div class="mb-3 flex-row">
                                <label class="form-label">Address</label>
                                <textarea class="form-control" rows="3"
                                    value={data.address} onChange={(e) => setDataedit({ ...data, address: e.target.value })}

                                ></textarea>
                            </div>



                            <button className='btn btn-primary mb-3  px-5  register-btn shadow-none pull-right me-0' type='submit'>Submit</button>




                        </div>







                    </div>

                </form>



            </div>
        */}
           <div>

                <p className='p-3 fs-1  fw-bold text-dark text-center border-bottom border-dark'>  404 </p>
                <p className='text-center fw-bold mfhs'>Error page not found</p>
                <p className='text-center'> Sorry, but the page you're looking for isn't here.</p>
           </div>
            </>
    )
}

export default ProfileEditform
