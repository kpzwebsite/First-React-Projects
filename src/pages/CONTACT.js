import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import promiseImage from '../assets/images/about/cover.jpg';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbxayrd2NvacqIIuM8to2PFUDyXpMVYVlqWRiufQ2OMBBAQzacbShbOsnJ4pH6-JifmTbA/exec", {
      method: "POST",
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Handle successful submission (e.g., show a success message)
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors (e.g., show an error message)
    });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="banner-about" style={{ backgroundImage: `url(${promiseImage})` }}>
              <div className="about-banner-content">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="banner-about-media">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14232.13022620504!2d75.74877740000001!3d26.902461849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723618753758!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="banner-about-content">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="exampleFormControlInput1" 
                          placeholder="Shubham" 
                          name="First"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="exampleFormControlInput2" 
                          placeholder="name@example.com" 
                          name="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Last Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="exampleFormControlInput3" 
                          placeholder="Gaur" 
                          name='Last'
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput4" className="form-label">Phone Number</label>
                        <input 
                          type="number" 
                          className="form-control" 
                          id="exampleFormControlInput4" 
                          placeholder="+91 123456789" 
                          name='Phone'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea 
                          className="form-control" 
                          id="exampleFormControlTextarea1" 
                          name='Message' 
                          rows="6"
                        ></textarea>
                      </div>
                    </div>
                    <div className='text-end'>
                      <button type="submit" className='btn btn-primary rounded'>Submit <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
