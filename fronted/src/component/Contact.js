import React from 'react'
import { Form, Button, Toast } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/contactus', formData);
      console.log('Data saved successfully:', response.data);
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      toast.success("Message send successfully")
    } catch (error) {
      console.error('Error saving data:', error.response.data.message);
    }
  };
  return (
    <>
      <div className='container-style-box mt-lg-4 mt-md-4 mt-3'>
        <p className='con-txt p-5' data-aos="flip-left">Contact Us</p>
      </div>
      <div className='container-fluid'>

        <div className='container'>
          <div className='row mb-4'>
            <div className='col-4'>
              <div className='cards border'>
                <div className='details p-3'>
                  <p className='text-center mt-5 fs-5'> <i class="bi bi-telephone me-2"></i>+91-9835024444</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
            <div className='cards border'>
                <div className='details p-3'>
                  <p className='text-center mt-5 fs-5'> <i class="bi bi-envelope me-2"></i>info@cimage.in</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
            <div className='cards border'>
                <div className='details p-3'>
                  <p className='text-center mt-4 fs-5'> <i class="bi bi-geo-alt-fill me-2"></i>S.K. Puri Park, Boring Road, Patna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* conatct form */}
        <div className='row px-3'>
          <div className='col-md-4 '>
            <div className='p-3 text-center sfhd fw-bold bg-warning mt-4 mfhs'>

              <p>Get More Deatils</p>
              <p>CIMAGE <a href='https://cimage.in/cimage-college'>Click</a></p>
              <p>CIMAGE Fee Structure <a href='https://cimage.in/cimage-fee-structure'>Click</a></p>
              <p>Student Credit Card <a href='https://cimage.in/student-credit-card'>Click</a></p>
              <p>Career <a  href='https://cimage.in/career'>Click</a></p>

              
            </div>
          </div>
        
        <div className='col-md-8 px-3 py-2 mb-5 border'>
          <p className='fhs fs-3 bg-light text-center'>Message</p>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
      </Form.Group>


      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" value={formData.message} onChange={handleChange} required />
      </Form.Group>

      <Button className='mt-3 px-4' variant="warning" type="submit">
        Send
      </Button>
    </Form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact
