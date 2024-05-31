import { height, width } from '@mui/system';
import React from 'react';

function About() {
  const myStyle={
    backgroundImage:"url('https://th.bing.com/th/id/OIP.vnoDBLtJhtfO1LVh1ACPPAHaEK?rs=1&pid=ImgDetMain')",
height:'600px',
width:'600px'
  }
  return (
    <div>
      
      <h1>About Page</h1>
      <div style={myStyle}></div>


     
      <div><h1>A grocery store is a retail establishment that specializes in selling a wide variety of food and household items to consumers for their everyday needs. These stores typically offer an extensive range of products, including fresh produce, dairy products, meat, canned goods, packaged foods, beverages, cleaning supplies, and personal care items.</h1></div>
    </div> 
  );
}

export default About;