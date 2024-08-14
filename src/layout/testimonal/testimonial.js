import testimonalimg from '../../assets/images/testimonial/1.png';
import testimonalimg2 from '../../assets/images/testimonial/2.png';
import testimonalimg3 from '../../assets/images/testimonial/3.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
{/* testimonial */}
function Testimonal({logo}) {
	return(
        <>
        <section class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5">
                        <div class="section-left-heading">
                            <span class="badge badge-sm light badge-primary mb-2">Testimonials</span>
                            <h2 class="mb-5">See how<br/> customers<br/>
                                <strong>drive impact</strong></h2>
                            <a class="btn btn-primary">See case studies</a>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="textimonial-right-bx">
                            <div class="ks-media">
                                <img src= {testimonalimg} alt=""/>
                                <div class="ks-icon">
                                    <a class="video"><FontAwesomeIcon icon={faPlay} className="fa-play" /></a>
                                </div>
                            </div> 
                        
                        </div>
                    </div>
                    <div class="col-xl-3 align-self-end">
                        <div class="textimonial-right-bx">
                            <div class="textimonal-payment">
                            <img class="mb-3" src= {testimonalimg2} alt=""/>
                                <p>"I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."</p>
                                <div>
                                    <h6 class="mb-1">SHUBHAM GAUR</h6>
                                    <small>CEO of Design Mart</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            </section>
            <section class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 align-self-center">
                        <div class="section-left-heading">
                       
                           <h2 class="mb-3"> Looking for a <strong>solution</strong> for your business? </h2>
                           <p class="mb-5">Check out Sogolytics enterprise feedback and experience management platform some out Sogolytics enterprise feedback and experience management platform.</p>
                            <a class="btn btn-primary me-3">Learn more</a>
                            <a class="btn btn-outline-primary">Schedule a consultation</a>

                        </div>
                    </div>
                    <div class="col-xl-6">
                    <img  class="float-end" src= {testimonalimg3} alt=""/>
                    </div>
                   
                </div>
            </div>   
            </section>
        </>
	)
}
export default Testimonal;