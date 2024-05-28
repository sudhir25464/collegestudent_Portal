import {useState} from 'react'
import '../CSS/loginRegister.css'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'
//import { comparePassword } from '../../../server/helper/auth'

function UserRejistation() {

  const navigate = useNavigate()

  const [data,setData] = useState({
    collegeId: '',
    fullName: '',
    fathersName: '',
    email: '',
    contact: '',
    gender: '',
    university: '',
    course: '',
    dob: '',
    password: '',
    confirmPassword: '',
    address: '',
  });

  const registerHandler =async (e) =>{
    e.preventDefault()

    const {collegeId,fullName,fathersName,email,contact,gender,university,course,dob, password,confirmPassword,address} = data
    try{
      const {data} = await axios.post('/register',{
        collegeId,
        fullName,
        fathersName,
        email,
        contact,
        gender,
        university,
        course,
        dob,
         password,
         confirmPassword,
         address
      })
      if(data.error){
        toast.error(data.error)
      }else if(password != confirmPassword){

        alert('Password not match')
      }
      else{
        setData({})
          toast.success('Register success Full welcome')

          navigate('/userlogin?')
        
      }
    }catch(error){

      console.log(error)
    }

  }

  
  return (
    <>
      <div className='container-style-box mt-lg-4 mt-md-4 mt-3'>
        <p className='con-txt p-5'>User-Registation</p>
      </div>

      <div>
        <div className="container border-design  mt-3 mb-5 pb-5 mt-3">
          <div className="row">

            <div className='container-fluid '>

              <div className="container border-design  mt-3 mb-5 pb-5">
                <div className="row">


                  <div className="col-12 col-md-4 col-lg-4 ">

                    <div className=' login-icon '>
                      <img className='img-fluid  ' src='' ></img>
                    </div>
                    <div className='mt-2  px-3 pt-2'><h3 className=' sfhs  fw-bold'>Dear student please fill all details carefully</h3>
                    <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1708582084/What-Is-A-Risk-Register_dhdrt4.png'>

                    </img>
                     <p className='text-white  mt-md-5  mt-2 p-2'> <span>NOTE:- </span>
                     Student must be register with college Email id</p>
                    </div>
                  </div>

                  {/* End First Section of Form UI */}

                  <div className="col-lg-8 col-md-8   registation-style">

                    {/* <p className='pt-3 rejister-heading mb-3'>Student Registartion</p> */}

                    <form onSubmit={registerHandler}>
                    <div className='row '>
                      


                      <div className='col-12 col-lg-12 col-md-12'>


                        <div class="mb-3 flex-row pt-3">
                          <label for="exampleFormControlInput1" class="form-label">College ID </label>
                          <input type="number" class="form-control" placeholder="eg : - 345490 "
                          value={data.collegeId} onChange={(e)=> setData({...data, collegeId: e.target.value})}
                          />
                        </div>

                        <div class="mb-3 flex-row">
                          <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                          <input type="text" class="form-control" placeholder="Enter your name" 
                           value={data.fullName} onChange={(e)=> setData({...data, fullName: e.target.value})}

                          />
                        </div>

                        <div class="mb-3 flex-row">
                          <label for="exampleFormControlInput1" class="form-label">Father's Name</label>
                          <input type="text" class="form-control" placeholder="Enter Father's Name" 
                          value={data.fathersName} onChange={(e)=> setData({...data, fathersName: e.target.value})}

                          />
                        </div>


                        <div class="mb-3 flex-row">
                          <label for="exampleFormControlInput1" class="form-label">Email</label>
                          <input type="email" class="form-control" placeholder="example@gmail.com" 

                          value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}

                          />
                        </div>

                        <div class="mb-3 flex-row">
                          <label  class="form-label">Contact</label>
                          <input type="number" class="form-control" placeholder="Enter your number" 
                          
                          value={data.contact} onChange={(e)=> setData({...data, contact: e.target.value})}

                          />
                        </div>

                        
                        <div class="mb-3 flex-row">
                          <label  class="form-label">Select Gender</label>
                          <select className="form-control text-dark" id="gender"
                          value={data.gender} onChange={(e)=> setData({...data, gender: e.target.value})}

                          >
                            <option  className='text'>--Select--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>


                          </select>
                        </div>

                      {/* </div> */}
                     
                      
                      {/* <div className='col-12  col-lg-6 col-md-6'> */}

              

                        <div class="mb-3 flex-row">
                          <label  class="form-label">Select University</label>
                          <select className="form-control  " id="gender" 
                          
                          value={data.university} onChange={(e)=> setData({...data, university: e.target.value})}

                          >
                            <option className='p-2' >--Select--</option>
                            <option value="PPU">PPU</option>
                            <option value="AKU">AKU</option>


                          </select>
                        </div>

                        <div class="mb-3 flex-row">
                          <label for="exampleFormControlInput1" class="form-label">Select Course</label>
                          <select className="form-control " id="gender" 
                          
                          value={data.course} onChange={(e)=> setData({...data, course: e.target.value})}

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
                          
                          value={data.dob} onChange={(e)=> setData({...data, dob: e.target.value})}

                          />
                        </div>
                        
                        <div class="mb-3 flex-row">
                          <label class="form-label">Password</label>
                          <input type="password" class="form-control" placeholder="password must be 8 charater"
                          value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}

                          />
                        </div>
                        
                        <div class="mb-3 flex-row">
                          <label class="form-label">Conform Password</label>
                          <input type="password" class="form-control" placeholder="Conform-Password" 
                          
                          value={data.confirmPassword} onChange={(e)=> setData({...data, confirmPassword: e.target.value})}

                          />
                        </div>
                        <div class="mb-3 flex-row">
                          <label  class="form-label">Address</label>
                          <textarea class="form-control"  rows="3"
                          value={data.address} onChange={(e)=> setData({...data, address: e.target.value})}

                          ></textarea>
                        </div>
                      

                      {/* <button className='btn btn-danger mb-3  px-5  register-btn shadow-none pull-right me-3' type='cancel'>cancel</button> */}

                      <button className='btn btn-primary mb-3  px-5  register-btn shadow-none pull-right me-0' type='submit'>Submit</button>
                     

                     
                      {/* <Link className='pull-right me-0 mt-5'><i class="bi bi-arrow-left-circle-fill"></i> Back to login</Link> */}

                      </div>
                    
                     
                             
        
       
         

                    </div>
                    
                    </form>
                   
                  

                  </div>
                 

                </div>
              </div>


            </div>


          </div>
        </div>
      </div>


    </>
  )
}

export default UserRejistation
