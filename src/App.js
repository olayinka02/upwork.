import React, { Component } from 'react';
import Navbarx from './component/Navbarx';
import Landingpage from './component/Landingpage';
import Landingpage2 from './component/Landingpage2';
import Business from './component/Business';
import Scope from './component/Scope';
import Work from './component/Work';
import Offering from './component/Offering';
import Star from './component/Star';
import Video from './component/Video';
import Skills from './component/Skills';
import Navfoot from './component/Navfoot';




class App extends Component {
  render() {
    return (
      <div>
        <Navbarx />
        <Landingpage />
        <Landingpage2 />
        <Business /><br/>
        <Scope /><br/><br/>
        <Work />
        <Offering />
        <Star /><br/>
        <Video />
        <Skills />
        <Navfoot />
        
      
       
       </div>
      
    );
  }
}



export default App;


