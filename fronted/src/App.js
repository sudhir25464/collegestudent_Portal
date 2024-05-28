import React, { useLayoutEffect } from 'react'
import Mainservice from './component/Mainservice'
import Rules from './component/Rules'
import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Userlogin from './component/Userlogin'
// imprt { BrowserRouter } from 'react-router-dom/cjs/react-router-dom'
// import NavbarC from './component/NavbarC'
import About from './component/About'
import Contact from './component/Contact'
import Galarry from './component/Galarry'
//import Footer from './component/Footer'
import UserRejistation from './component/UserRejistation'
import MFooter from './component/MFooter'


import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import UserDashbord from './component/UserDashbord'
import Userupdate from './pages/Userupdate'
import Userpost from './pages/Userpost'
import EductContentpage from './pages/EductContentpage'
import UserdashbordHeader from './pages/UserdashbordHeader'
import AdminLoginpage from './pages/AdminLoginpage'
import AdminDashbord from './component/AdminDashbord'
// import AdminNavbar from './component/AdminNavbar'
import StudentPost from './adminpage/StudentPost'
// import PrivateRoute from './component/PrivateRoute'
import AnnouncementPgae from './adminpage/AnnouncementPgae'
// import PrivateAdminroute from './component/PrivateAdminroute'
import UpdatesPage from './adminpage/UpdatesPage'

import Navbar from './component/Navbar'
import CourseEBookpage from './adminpage/CourseEBookpage'
import AuthStudentprofilePage from './adminpage/AuthStudentprofilePage'
import SettingAuthpage from './adminpage/SettingAuthpage'
import Glarrypage from './adminpage/Glarrypage'
import { Navigate  } from 'react-router-dom'
// import UserProfile from './component/UserProfile'

import Aos from 'aos'


import 'aos/dist/aos.css'
import SettingLoginpage from './adminpage/SettingLoginpage'
import Userprofiledata from './pages/Userprofiledata'


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

const isUserSignIn = !!localStorage.getItem('token')

const isAdminLogin = !!localStorage.getItem('Admintoken')
// import { useLocation } from 'react-router-dom'
function App() {

 

  function ScrollToTopOnNavigate() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  // const location = useLocation();
  // const navigate = useNavigate();
  
  // const PrivateRoute = ({ element, ...props }) => {
  //   return isUserSignIn ? (
  //     element
  //   ) : (
  //     <Navigate state={{ from: location.pathname }} replace to="/userlogin" />
  //   );
  // };

  // const AdminPrivateRoute = ({ element, ...props }) => {
  //   return isAdminLogin ? (
  //     element
  //   ) : (
  //     <Navigate state={{ from: location.pathname }} replace to="/adminlogin" />
  //   );
  // };

  // const PublicRoute = ({ element, ...props }) => {
  //   return isUserSignIn ? (
  //     <Navigate state={{ from: location.pathname }} replace to="/userdashbord" />
  //   ) : (
  //     element
  //   );
  // };

  return (

    <>
      <div>
        <BrowserRouter>
          <ScrollToTopOnNavigate />
          <Navbar />

          <Toaster />
          <Routes>

            {/*  i wanat to this routte is public */}

            <Route path='/' element={<Mainservice />}></Route>
            <Route path='about' element={<About />} />
            <Route path='contactus' element={<Contact />} />
            <Route path='glarryphotoes' element={<Galarry />} />

            <Route path='userlogin?' element={<Userlogin />}></Route>
            <Route path='userejistration' element={<UserRejistation />} />
            <Route path='rules' element={<Rules />}></Route>
            <Route path='adminlogin' element={<AdminLoginpage />}></Route>


            {/* I wnat is route is private  and admin route also provete  */}

            {
              isUserSignIn &&
              // <Route path='Private' element={<PrivateRoute />}>
              // <Route path='userdashbord' element={<UserDashbord/>}>
              <>
                <Route path='details' element={<UserdashbordHeader />} />
                <Route path='userupdate' element={<Userupdate />} />
                <Route path='helpstudentprofile' element={<Userpost />} />
                <Route path='e-leringbord' element={<EductContentpage />} />
                <Route path='data' element={<Userprofiledata />} />
              </>


            }



            {/* <Route path='Security' element={<PrivateAdminroute/>} > </Route> */}

            {
              isAdminLogin &&
              <>
                <Route path='auth/api/admindashpage' element={<AdminDashbord />}></Route>

                <Route path='adminpost' element={<StudentPost />}></Route>
                <Route path='newanouncement' element={<AnnouncementPgae />} />
                <Route path='newupdates' element={<UpdatesPage />} ></Route>
                <Route path='auth/api/addcourse-metrialEbook' element={<CourseEBookpage />} />
                <Route path='auth/api/addstudentProfile-manage-details' element={<AuthStudentprofilePage />} />
                <Route path='secutitylogin?' element={<SettingLoginpage />} />
                <Route path='authsettinguh3235426nefj343274b7df4g73gf74' element={<SettingAuthpage />} />
                <Route path='auth/api/glarry' element={<Glarrypage />} />

              </>



            }
            {/* <Route path='adminpage' element={<AdminDashbord/>}></Route>

<Route path='adminpost' element={<StudentPost/>}></Route>
<Route path='newanouncement' element={<AnnouncementPgae/>} />
<Route path='newupdates' element={<UpdatesPage/>} ></Route>
 */}



          </Routes>

          <MFooter />

        </BrowserRouter>
      </div>
    </>

  )
}

export default App
