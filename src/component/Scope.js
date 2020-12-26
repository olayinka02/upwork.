import React, {  useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Container,   } from 'react-bootstrap';
//import babe from './image/babe.jpg';

const Scope = () => {
  useEffect(() => {
     Aos.init({duration: 2000 });
  }, []);
    return (
      <div style={{backgroundColor:'whitesmoke',}}>
         <div className="scope" >

         <Container data-aos="fade-up" className="scopebody">
            <Row >
              <Col sm className="firstscope">
                  <h5>Hire for any scope</h5>

              </Col>
              <Col sm>
                  <div className="line"></div>
                  <h6>Complex projects</h6>
                  <p>Find specialized experts and agencies for large projects.</p>
               
              </Col>
              <Col sm>
              <div className="line"></div>
              <h6>Longer-term contracts</h6>
              <p>Expand your team with a skilled resource.</p>
               
               </Col>
               <Col sm>
               <div className="line"></div>
              <h6>Short-term</h6>
              <p>Build a pool of diverse experts for one-off tasks.</p>
               
               
               </Col>
            </Row>
          </Container>
          
         </div>
       </div>
      
    );
  };




export default Scope;

 