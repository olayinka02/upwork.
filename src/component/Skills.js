import React, {  useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Container, Button   } from 'react-bootstrap';
//import babe from './image/babe.jpg';

const Skills = () => {
  useEffect(() => {
     Aos.init({duration: 2000 });
  }, []);
    return (
      <div style={{backgroundColor:'whitesmoke',paddingTop:6 + 'rem',paddingBottom:4 + 'rem',width:100 + '%',}}>
         <div  >

         <Container data-aos="fade-up" >
             <h4>Top Skills</h4>
            <Row >
              <Col sm >
                  <ul style={{color:'green',}}>
                      <li stype="mark">Android Developer</li>
                      <li stype="mark">Customer Service</li>
                      <li stype="mark">Frontend Dev</li>
                      <li stype="mark">Mobile App</li>
                      <li stype="mark">Sale consultant</li>
                      <li stype="mark">Software Enginner</li>
                      <li stype="mark">Vitual Assistance</li>
                      <li stype="mark">Ios Developer</li>
                  </ul>
                 

              </Col>
              <Col sm>
              <ul style={{color:'green',}}>
                      <li stype="mark">Book Keeper</li>
                      <li stype="mark">Database Admin</li>
                      <li stype="mark">Game Developer</li>
                      <li stype="mark">Java Developer</li>
                      <li stype="mark">PHP Developer</li>
                      <li stype="mark">SEO Experts</li>
                      <li stype="mark">Technical Writter</li>
                      <li stype="mark">Web Designer</li>
                  </ul>
                 
                 
               
              </Col>
              <Col sm>
              <ul style={{color:'green',}}>
                      <li stype="mark">Content Writter</li>
                      <li stype="mark">Data Scientist</li>
                      <li stype="mark">Graphics Design</li>
                      <li stype="mark">Javascript Developer</li>
                      <li stype="mark">Python Developer</li>
                      <li stype="mark">Social Media Manager</li>
                      <li stype="mark">UI Designer</li>
                      <li stype="mark">Wordpress Designer</li>
                  </ul>
               
               </Col>
               <Col sm>
               <ul style={{color:'green',}}>
                      <li stype="mark">Copy writter</li>
                      <li stype="mark">Facebook Developer</li>
                      <li stype="mark">Information Security</li>
                      <li stype="mark">Logo Designer</li>
                      <li stype="mark">Resume Writter</li>
                      <li stype="mark">Software Developer</li>
                      <li stype="mark">Writter</li>
                      <li stype="mark">UX Designer</li>
                  </ul>
             
               
               </Col>
            </Row>
            <br/>
            <h4>Trending Skills in UK</h4>
            <Row >
              <Col sm >
                  <ul style={{color:'green',}}>
                      <li stype="mark">Android Developer</li>
                      <li stype="mark">Customer Service</li>
                      <li stype="mark">Frontend Dev</li>
                      <li stype="mark">Mobile App</li>
                      <li stype="mark">Sale consultant</li>
                      <li stype="mark">Software Enginner</li>
                      <li stype="mark">Vitual Assistance</li>
                      <li stype="mark">Ios Developer</li>
                  </ul>
                 

              </Col>
              <Col sm>
              <ul style={{color:'green',}}>
                      <li stype="mark">Book Keeper</li>
                      <li stype="mark">Database Admin</li>
                      <li stype="mark">Game Developer</li>
                      <li stype="mark">Java Developer</li>
                      <li stype="mark">PHP Developer</li>
                      <li stype="mark">SEO Experts</li>
                      <li stype="mark">Technical Writter</li>
                      <li stype="mark">Web Designer</li>
                  </ul>
                 
                 
               
              </Col>
              <Col sm>
              <ul style={{color:'green',}}>
                      <li stype="mark">Content Writter</li>
                      <li stype="mark">Data Scientist</li>
                      <li stype="mark">Graphics Design</li>
                      <li stype="mark">Javascript Developer</li>
                      <li stype="mark">Python Developer</li>
                      <li stype="mark">Social Media Manager</li>
                      <li stype="mark">UI Designer</li>
                      <li stype="mark">Wordpress Designer</li>
                  </ul>
               
               </Col>
               <Col sm>
               <ul style={{color:'green',}}>
                      <li stype="mark">Copy writter</li>
                      <li stype="mark">Facebook Developer</li>
                      <li stype="mark">Information Security</li>
                      <li stype="mark">Logo Designer</li>
                      <li stype="mark">Resume Writter</li>
                      <li stype="mark">Software Developer</li>
                      <li stype="mark">Writter</li>
                      <li stype="mark">UX Designer</li>
                  </ul>
             
               
               </Col>
            </Row>
            <center>
            <Button className="btn" variant="outline-success" size="md" >Browse More Skills</Button>
            </center>
           
          </Container>
          
         </div>
       </div>
      
    );
  };




export default Skills;