import Navbar from './components/Navbar'
import './App.css'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'


function App() {
  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#3B3B3B'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  const [btnColor, setBtnColor] = useState("primary");

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} setBtnColor={setBtnColor}/>
      <div className="container my-5">
        <TextForm  text="Enter Text Below" mode={mode} btnColor={btnColor}/>
      </div>
      {/* <About/> */}
      
    </>
  )
}

export default App
