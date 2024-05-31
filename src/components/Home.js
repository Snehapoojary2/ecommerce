import React from 'react';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <h1>Welcome to our store</h1>
        <div style={{display:"flex"}}>
          <div style={{backgroundImage:"/photo/67c63a17a12e2ea69900e5ca9e594d5f.jpg",height:"300px"}}>Div1</div>
     
        
          <div style={{backgroundColor:"blue",height:"300px"}}>Div2</div>
        </div>
      </div>
    </div>
  );
}

export default Home;