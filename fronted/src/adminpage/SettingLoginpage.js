import React, { useState } from 'react';

import '../CSS/setting.css';
import { useNavigate } from 'react-router-dom';

function SettingLoginPage() {
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate();

  const handlersubmit =(e)=>{
    e.preventDefault()
  }
  const handlePasswordCheck = () => {


    const expectedPassword = '1234567';

    if (password === expectedPassword) {

      // Password is correct, navigate to the other page
    //   history.push('/other-page');
    navigate('/authsettinguh3235426nefj343274b7df4g73gf74')

    } else {
      // Password is incorrect, show an alert
      alert('Invalid key');
    }
  };

  return (
    <>
      <div className='container-fluid mian-security-login-cont'>
        <div className='container'>
          <div className='row'>
             <form  onClick={handlersubmit}>
            <div className='pull-center input-cont px-5'>
               
              <input
                className='form-control shadow-none'
                type='password'
                placeholder='Enter security keys'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className='btn btn-success px-4 shadow-none'
                type='submit'
              
              onClick={handlePasswordCheck}

              >
                <i className='bi bi-arrow-right fw-bold'></i>
              </button>
             
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingLoginPage;
