
import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'



import "../CSS/loginRegister.css"
import logincon from '../Images/graduates_201603.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Userlogin() {

  const navigate = useNavigate()
  const [data, setData] =useState({
    email:'',
    password:'',
  })

  const loginUser = async (e) =>{
    e.preventDefault()

    const {email,password} = data
    try {
      
      const {data} = await axios.post('/logiin',{
        email,
        password
      });


      if(data.error){
        toast.error(data.error)

      }else{
       

      //  here we store token in userdata
      // localStorage.setItem('userdata',JSON.stringify(data))

        //tostyfy.success('Login success welcomr to user dashbord')
        const token = data.token
      
        toast.success('Login success Welcome to user Dashbord')
       // navigate('/userdashbord')

        navigate('/details')

        window.location.reload()
        localStorage.setItem('token', token)
        setData({});
      }
    } catch (error) {
      console.log(error)
      
    }
  }
   return (
    <>

      <div className='container-style-box mt-lg-4 mt-md-4 mt-3 ' >
        <p className='con-txt p-5' data-aos="flip-left">Student Login</p>
      </div>

      <div>
        
        <div className='container-fluid '>

          <div className="container border-design  mt-3 mb-5 pb-5">
            <div className="row">


              <div className="col-12 col-md-6 col-lg-6 " data-aos="fade-down-right">

                <div className=' login-icon pt-3 mt-4'>
                  <img className='img-fluid' alt='Loading..' src={logincon}></img>
                </div>
                <div className='mt-2  px-5 pt-4'><h3 className='login-text-headline mt-2'> Your academic adventure starts here! Login for instant access to educational resources,Updates, and a hub of student services.</h3>
                 {/* <p className='text-white mt-2'> Your gateway to knowledge and educational excellence. with Updates . </p> */}
                </div>
              </div>


              <div className="col-12 col-md-6 col-lg-6  ">

                <div className="card  card-1 mt-2 mx-0" data-aos="fade-up-left">
                  <div className="card-header ">
                    <h3 className="text-center">Login</h3>
                  </div>

                  {/* Login Body There handle user value for backend */}
                  <div className="card-body">
                    <form onSubmit={loginUser}>
                      <div className="form-group">
                        <label className='admin-label' for="username">Username:</label>
                        <input type="text"   className="form-control" placeholder="Enter your email"

                        value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}
                         />
                        
                      </div>
                      <div className="form-group">
                        <label className='admin-label' for="password">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter your password"
                        
                        value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}
                        />
                       
                      </div>
                      <button type="submit" className="btn btn-primar btn-grad btn-block  shadow-none p-2" >Login</button>
                    </form>
                    
                  </div>
                  <p className='mx-4 text-center '><Link to="/userejistration">Create a new account Register</Link></p>
                </div>
              




              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userlogin
