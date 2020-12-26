import React, { Component } from 'react';
import { Row, Col, Container, Form,  } from 'react-bootstrap';
import babexx from './image/babexx.jpg';

class Landingpage extends Component {
  render() {
    return (
      <div>
         <div className="landingpage" >

         <Container fluid>
            <Row>
              <Col sm>
                <div className="talentdiv">
                  <h1 className="talentdivhead">In-demand talent On demand..
                  <h1 className="talentdivhead2">Upwork is how.</h1>
                  </h1>
                  <p className="talentdivhead3">Hire proven pros with confidence using the world’s largest, remote talent platform.</p>
                </div>
                <div className="formbutton" >
                <Form.Control style={{width:275,}}  className="formsearch" type="text" placeholder="I'm looking for PHP ex Developer" /><br/>
                <p className="enterprises">Get an Enterprise Demo</p>
      
                </div>

              </Col>
              <Col sm>
                <img src={babexx} alt="babexx"  className="mybabe" />
              </Col>
            </Row>
          </Container>
          
         </div>
       </div>
      
    );
  }
}



export default Landingpage;

 