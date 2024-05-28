import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute =()=> {
  
  const isUserSignIn = !!localStorage.getItem('token')



  return (
    <>

    {
      isUserSignIn ?
      <Outlet/>
      :
      <Navigate to={"/userlogin?"}/>
    }
   
    </>
  )
}

export default PrivateRoute


// import React, { useEffect, useState } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if the user is logged in by verifying the token
//     const token = localStorage.getItem('token'); // Assume you store the token in localStorage

//     if (!token) {
//       setIsLoggedIn(false);
//       return;
//     }

//     // Send a request to the server to verify the token
//     fetch('/api/verify-token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(response => {
//         if (response.ok) {
//           setIsLoggedIn(true);
//         } else {
//           setIsLoggedIn(false);
//         }
//       })
//       .catch(error => {
//         console.error('Error verifying token:', error);
//         setIsLoggedIn(false);
//       });
//   }, []);

//   if (isLoggedIn) {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/userlogin" />;
//   }
// };

// export default PrivateRoute;
