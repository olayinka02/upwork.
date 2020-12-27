import React, { Component } from 'react';
import { Row, Col, Container, Button   } from 'react-bootstrap';


class Video extends Component {
  render() {
    return (
      <div>
         <div className="videopage" >

         <Container fluid>
            <Row>
              <Col sm >
                  <div className="videobodyone">
                  <h1>Instapage saved $2.3M with Upwork</h1>
                  <p>"Upwork took a lot of stress off of growing with minimal resources"</p>
                  <Button className="btn" variant="success" size="sm" >Read more</Button>
                 
                 

                  </div>
                 
              </Col>
              <Col sm>
                <center>
                <iframe src="https://player.vimeo.com/video/60742256"  title="video" width="600" height="330" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </center>
              
              </Col>
            </Row>
          </Container>
          
         </div>
       </div>
      
    );
  }
}



export default Video;

 