import './App.css';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'

function App() {
  const [Mode,setMode] = useState("light");
  const [modeName,setModeName] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color:'#26293a',
    backgroundColor: 'white'
})
  const [bgColor, setBgColor] = useState({
    color:'#26293a',
    bgColor: 'white'
  })

  const toggleMode = () => {
    if(Mode==="light" && myStyle.color === '#26293a'){
      setMode("dark")
      setModeName("Enable Light Mode")
      setMyStyle({
        color:'white',
        backgroundColor: '#26293a'}) 
      setBgColor({
        color:'white',
        backgroundColor: '#26293a'})
    }

    if(Mode==="dark" ){
      setMode("light")
      setModeName("Enable Dark Mode")  
      setMyStyle({
        color:'#26293a',
        backgroundColor: 'white'})
        setBgColor({
          color:'#26293a',
          backgroundColor: 'white'})    
    }
  
  }
  return (
    <>
      <div style={bgColor} >
        {/* <Router> */}
          <Navbar mode={Mode} toggleMode = {toggleMode} modeName={modeName}/>
          <div className="container"  style={{                                     
                                      height: '905px',
                                      overflow: 'auto' 
                                    }}>
            {/* <Routes> */}
                {/* <Route exact path="/" element={<TextForm Heading="Enter Your Text"/>} />  exact path is used to render the intended component because react do partial match. */}
                <TextForm Heading="Enter Your Text"/>
                {/* <Route exact path="/about" element={<About style={myStyle} />} /> */}
            {/* </Routes> */}
          </div>
      
        {/* </Router> */}

      </div>
    </>
  );
}

export default App;
