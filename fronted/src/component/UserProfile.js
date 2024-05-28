import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('userdata');

    if (token) {
      try {
        // Decode the token
        const decodedToken = jwt.decode(token);

        // If decoding is successful, update the state with user data
        if (decodedToken) {
          setUserData(decodedToken);

          // Example: Fetch additional user details using the token
          fetchUserDetails(decodedToken);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const fetchUserDetails = async (decodedToken) => {
    try {
      // Example: Fetch additional user details using the token
      const response = await axios.get('/api/userdetails', {
        headers: {
          Authorization: `Bearer ${decodedToken}`, // Include token in the Authorization header
        },
      });

      // Handle the response data as needed
      console.log('User Details:', response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    // <div>
    //   {userData ? (
    //     <div>
    //       <h2>Welcome, {userData.fullName}!</h2>
    //       <p>Email: {userData.email}</p>
    //       {/* Render other user details as needed */}
    //     </div>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>

    <>
    
    <div className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col'>

          <div className='main-user-profile-container bg-light shadow'>

          {userData ? (
        <div>
          <h2>Welcome, {userData.fullName}!</h2>
          <p>Email: {userData.email}</p>
          {/* Render other user details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}

          </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserProfile;
