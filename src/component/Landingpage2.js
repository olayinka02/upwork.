import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import  image1 from './image/image1.svg';
import image2 from './image/image2.svg';
import image3 from './image/image3.svg';
import image4 from './image/image4.svg';
import image5 from './image/image5.svg';
import image6 from './image/image6.svg';
import image7 from './image/image7.svg';
import image8 from './image/image8.svg';


const Landingpage2 = () => {
     useEffect(() => {
       Aos.init({ duration: 2000 });
     }, []);
    return (
      <div>
         <div className="landingpage2" >

         <Container>
           <br/>
           <h5 className="landingpagehead">find quality talent and agencies</h5>
            <Row>
              <Col  xs={12} md={3}  >
                <div  data-aos="fade-up" className="colbody">
                <Row sm className="imagebody">
                    <img className="bodyImage" src={image1} alt="img" />
                  </Row>
                  <Row sm className="bodytext">
                    <p>Data Analytic</p>
                  </Row>
                </div>
                 
              </Col>
              <Col  xs={12} md={3}  >
                <div  data-aos="fade-up" className="colbody">
                <Row sm className="imagebody">
                    <img className="bodyImage" src={image2} alt="img" />
                  </Row>
                  <Row sm className="bodytext">
                    <p>Customer Service</p>
                  </Row>
                </div>
             
              </Col>
              <Col  xs={12} md={3} >
                <div  data-aos="fade-up" className="colbody">
                <Row sm className="imagebody">
                    <img className="bodyImage" src={image3} alt="img" />
                  </Row>
                  <Row sm className="bodytext">
                    <p>Admin Support</p>
                  </Row>
                </div>
              
              </Col>
              <Col  xs={12} md={3}  >
                <div  data-aos="fade-up" className="colbody">
                <Row sm className="imagebody">
                    <img className="bodyImage" src={image4} alt="img" />
                  </Row>
                  <Row sm className="bodytext">
                    <p>Enginnering</p>
                  </Row>
                </div>
             
              </Col>
            </Row>

            <Row>
              <Col  xs={12} md={3} >
                <div  data-aos="fade-up" className="colbody" >
                <Row sm className="imagebody">
                    <img className="bodyImage" src={image5} alt="img" />
                  </Row>
                  <Row sm className="bodytext">
                    <p>Software Dev</p>
                  </Row>
                </div>
                  
              </Col>
              <Col  xs={12} md={3} >
                <div  data-aos="fade-up" className="colbody">
                <Row sm className="imagebody">
                    <img className="bodyImage" src={image6} alt="img" />
                  </Row>
                  <Row sm className="bodytext">
                    <p>Writing</p>
                  </Row>
                </div>
              
              </Col>
              <Col  xs={12} md={3} >
                <div  data-aos="fade-up" className="colbody">
                <Row sm className="imagebody">
                    <img className="bodyImage" src={image7} alt="img" />
                  </Row>
                  <Row sm className="bodytext">
                    <p>Sales & Marketing</p>
                  </Row>
                </div>
              
              </Col>
              <Col  xs={12} md={3}  >
                <div  data-aos="fade-up" className="colbody">
                <Row sm className="imagebody">
                    <img className="bodyImage" src={image8} alt="img" />
                  </Row>
                  <Row sm className="bodytext">
                    <p>Design & Creative</p>
                  </Row>
                </div>
             
              </Col>
            </Row>
          </Container><br/>
          <center>
            <p>Don’t see what you’re looking for? <span style={{color:'yellowgreen',fontWeight:'bold',}}> See all categories</span></p>
          </center>
          
         </div>
       </div>
      
    );
  };




export default Landingpage2;