import React, {  useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Container,   } from 'react-bootstrap';
import icon1 from './image/icon1.png';
import icon2 from './image/icon2.png';
import icon3 from './image/icon3.png';
import icon4 from './image/icon4.png';

const Navfoot = () => {
  useEffect(() => {
     Aos.init({duration: 2000 });
  }, []);
    return (
      <div >
         <div className="navfoot" >

         <Container data-aos="fade-up">
             <center>
                 <p className="longterm">Looking to hire for long-term or full-time assignments? See how Upwork Payroll simplifies admin.</p><hr/>
             </center>
            <Row >
              <Col sm >
                  <ul className="listednavfoot">
                      <li><h5>Company</h5></li>
                      <li>About Us</li>
                      <li>Investor Relation</li>
                      <li>Careers</li>
                      <li>Upwork Foundation</li>
                      <li>Press</li>
                      <li>Trust, Safety & Security</li>
                      <li>Terms of Service</li>
                      <li>Privacy Policy</li>
                  </ul>
                 

              </Col>
              <Col sm>
              <ul className="listednavfoot">
                      <li><h5>Resources</h5></li>
                      <li>Resources</li>
                      <li>Customer Support</li>
                      <li>Customer Stories</li>
                      <li>Business Resources</li>
                      <li>Payroll Services</li>
                      <li>Upwork Reviews</li>
                     
                  </ul>
                 
                  
               
              </Col>
              <Col sm>
              <ul className="listednavfoot">
                      <li><h5>Browse</h5></li>
                      <li>Freelancer by skill</li>
                      <li>Freelancer in USA</li>
                      <li>Freelancer IN UK</li>
                      <li>Freelancer in Canada</li>
                      <li>Freelancer in Australia</li>
                      <li>Jobs in search</li>
                      <li>Jobs in ULA</li>
                    <li>FIND Jobs</li>
                  </ul>
             
               </Col>

              
            </Row><br/><br/>
            <Row>
                <Col md={4} xs={12} >
                    <div style={{display:'inline',}}>
                        <p style={{color:'yellowgreen',}}>follow us</p>
                        <img src={icon1} alt="icon" className="iconimage" />
                        <img src={icon2} alt="icon" className="iconimage" />
                        <img src={icon3} alt="icon" className="iconimage" />
                        <img src={icon4} alt="icon" className="iconimage" />
                    </div>
                   
                </Col>
                <Col md={{ span: 4, offset: 4 }} xs={12}>
                    <address style={{color:'white',paddingLeft:3,}}>
                        nO 16, Itako Wuse 2, Abuja FCT,Nigeria.
                        <p>08101831001<br/>
                        07035764622</p>
                    </address>
                </Col>
            </Row>
          </Container>
          
         </div>
       </div>
      
    );
  };




export default Navfoot;
