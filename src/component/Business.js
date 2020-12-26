import React, { Component } from 'react';
import { Row, Col, Container,   } from 'react-bootstrap';
import businessimg1 from './image/businessimg1.png';
import businessimg2 from './image/businessimg2.png';
import businessimg3 from './image/businessimg3.png';
import businessimg4 from './image/businessimg4.png';
import businessimg5 from './image/businessimg5.png';
import businessimg6 from './image/businessimg6.png';

class Business extends Component {
  render() {
    return (
      <div className="bus">
         <div className="business" ><br/>
             <center>
                 <p style={{color:'black',fontWeight:'bold',}}>Trusted by 5M+ businesses</p>
             </center>

         <Container fluid >
            <Row>
              <Col xs={6} md={2} >
                 <img src={businessimg1} className="businessimg" alt="bus" /> 
              </Col>
              <Col  xs={6}  md={2}>
              <img src={businessimg2} className="businessimgx" alt="bus" />
              </Col>
              <Col xs={6}  md={2} >
              <img src={businessimg3} className="businessimg" alt="bus" />
              </Col>
              <Col  xs={6} md={2}>
              <img src={businessimg4} className="businessimg" alt="bus" />
              </Col>
              <Col  xs={6}  md={2}>
              <img src={businessimg5} className="businessimg" alt="bus" />
              </Col>
              <Col  xs={6}  md={2}>
              <img src={businessimg6} className="businessimgx" alt="bus" />
              </Col>
            </Row>
          </Container>
          
         </div>
       </div>
      
    );
  }
}



export default Business;
