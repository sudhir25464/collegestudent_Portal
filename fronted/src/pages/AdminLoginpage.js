import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import '../CSS/loginRegister.css'
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function AdminLoginpage() {



    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
        role: '',
    })

    const loginAdmin = async (e) => {
        e.preventDefault()

        const { email, password, role } = data
        try {

            const { data } = await axios.post('/adminlogin', {
                email,
                password,
                role
            });
            if (data.error) {
                toast.error(data.error)

            } else {

                toast.success('Login success Welcome to Admin Dashbord')
                const Admintoken = data.Admintoken

                navigate('/auth/api/admindashpage')
                window.location.reload()
                localStorage.setItem('Admintoken', Admintoken)


                setData({});


                //  localStorage.setItem('user',JSON.stringify(data))


                //tostyfy.success('Login success welcomr to user dashbord')

                // navigate('/userdashbord')


            }
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <>

            <div className=' mt-0   admin-login-containe shadow m-md-5 m-2 mb-5 pb-2'>
                <div className=" px-md-5 mx-4 mt-5  py-5 mb-5 inner-admin-cont " data-aos="fade-down">

                    <p className='text-center text-admin-login fhs'><FontAwesomeIcon icon="fa-brands fa-adn" />Admin</p>
                    <form onSubmit={loginAdmin}>
                        <div className="form-group">
                            <label for="username" className='admin-label'>User ID:</label>
                            <input type="text" className="form-control" placeholder="Enter userid" required

                                value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                            />

                        </div>
                        <div className="form-group">
                            <label for="password" className='admin-label'>Password:</label>
                            <input type="password" className="form-control" placeholder="Enter  password" required

                                value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                            />

                        </div>
                        <div className='form-group'>

                            <label for="username" className='admin-label'>role</label>
                            <input type="text" className="form-control " placeholder="role"

                                value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })}
                            />
                        </div>

                        <div className='pull-right'>
                            <button type="submit" className="btn btn-primary btn-block pull-center-left px-5 py-2   mb-2" >Login</button>
                            {/* <Link to='/'> <button type="button" className="btn btn-dark btn-block p-2" >Cancel</button></Link> */}

                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default AdminLoginpage
