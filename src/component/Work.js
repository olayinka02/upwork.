import React, {  useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Container,   } from 'react-bootstrap';
import work1 from './image/work1.svg';
import work2 from './image/work2.svg';
import work3 from './image/work3.svg';
import work4 from './image/work4.svg';

const Work = () => {
  useEffect(() => {
     Aos.init({duration: 1000 });
  }, []);
    return (
      <div>
         <div className="work" >
             <br/><center>
             <h1 data-aos="fade-up" >How it works</h1>
             </center>
             

         <Container  className="workbody">
            <Row >
              <Col sm  data-aos="fade-up" >
                  <div>
                      <center>
                          <div className="imgworkbg"><img src={work1} className="imgwork" alt="imgwork" /></div>
                          <h5>Post a job (it’s free)</h5>
                          <p>Tell us about your project. 
                            Upwork connects you with top talent and 
                            agencies around the world, or near you.
                          </p>
                          
                      </center>
                  </div>
                  

              </Col>
              <Col sm  data-aos="fade-up">
              <div>
                      <center>
                          <div className="imgworkbg"><img src={work2} className="imgwork" alt="imgwork" /></div>
                          <h5>Bids come to you</h5>
                          <p>Get qualified proposals within 24 hours. 
                            Compare bids, reviews, and prior work. 
                            Interview favorites and hire the best fit.
                          </p>
                          
                      </center>
                  </div>
                  
                 
               
              </Col>
              <Col sm  data-aos="fade-up">
              <div>
                      <center>
                          <div className="imgworkbg"><img src={work3} className="imgwork" alt="imgwork" /></div>
                          <h5>Collaborate easily</h5>
                          <p>Use Upwork to chat or video call, 
                            share files, and track project milestones 
                            from your desktop or mobile.
                          </p>
                          
                      </center>
                  </div>
                  
             
               
               </Col>
               <Col sm  data-aos="fade-up">
               <div>
                      <center>
                          <div className="imgworkbg"><img src={work4} className="imgwork" alt="imgwork" /></div>
                          <h5>Payment simplified</h5>
                          <p>Pay hourly or fixed-price and receive 
                            invoices through Upwork. 
                            Pay for work you authorize.
                          </p>
                          
                      </center>
                  </div>
                  
              
               
               </Col>
            </Row>
          </Container>
          
         </div>
       </div>
      
    );
  };




export default Work;
