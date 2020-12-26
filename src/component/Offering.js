import React, {  useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Container, Button  } from 'react-bootstrap';
//import work1 from './image/work1.svg';



const Offering = () => {
  useEffect(() => {
     Aos.init({duration: 1000 });
  }, []);
    return (
      <div>
         <div className="offering" >
             <br/>
             <center className="offeringhead">
             <h1  data-aos="fade-up">Choose the offering that works best for you</h1>
             <p  data-aos="fade-up">All options include access to Upwork’s talent pool of quality talent and agencies.</p>
             </center>
             

         <Container  className="offeringbody">
            <Row >
              <Col  xs={12} md={3}  data-aos="fade-up" className="offeringbox">
                  <div>
                      <center><br/>
                         <h5>Basic</h5><br/>
                         <Button  className="btn" variant="success"  size="sm" >Select Basic</Button><br/>
                         <p>Free</p><hr/>
                         </center>
                         <ul style={{color:'green',}}>
                             <li type="mark">Verified work history and reviews</li>
                             <li type="mark">Unlimited proposals</li>
                             <li type="mark">Built-in collaboration tools and easy payments</li>
                             
                         </ul>
                     
                  </div>
              </Col>
              <Col xs={12} md={3}  data-aos="fade-up" className="offeringbox">
              <div>
              <center><br/>
                         <h5>Plus</h5><br/>
                         <Button  className="btn" variant="success"  size="sm" >Select Plus</Button><br/>
                         <p>$49.99/month</p><hr/>
                         <p>Everything in <span style={{fontWeight:'bold',}}>Basic</span>, and:</p>
                         </center>
                         <ul style={{color:'green',}}>
                             <li type="mark">Dedicated account managers to help you find and hire quality talent fast</li>
                             <li type="mark">Project tracking and collaboration tools for teams</li>
                             <li type="mark">Tailored search results featuring Top Rated and Rising Talent</li>
                             
                         </ul>
                     
                    
                </div>
              </Col>
              <Col xs={12} md={3} data-aos="fade-up" className="offeringbox">
              <div>
              <center><br/>
                         <h5>Enterprise</h5><br/>
                         <Button  className="btn" variant="success"  size="sm" >Contact-Us</Button><br/>
                         <p>Price varies - contact us for a demo</p><hr/>
                         <p>Everything in <span style={{fontWeight:'bold',}}>Plus</span>, and:</p>
                         </center>
                         <ul style={{color:'green',}}>
                             <li type="mark">Custom configurable contracting and onboarding process</li>
                             <li type="mark">Worker classification compliance services</li>
                             <li type="mark">Project-based or managed solutions, and dedicated account executive</li>
                             
                         </ul>
                     
                  </div>
                
               </Col>
            </Row>
            <center  data-aos="fade-up"><br/>
                <p  >*3% payment processing and administration fee on all payments to freelancers and agencies.</p>
            </center>
          
          </Container>
          
         </div>
       </div>
      
    );
  };




export default Offering;
