import Navbar from './components/Navbar'
import './App.css'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {
 

  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-5">
        <TextForm  text="Enter Text Below"/>
      </div>
      {/* <About/> */}
      
    </>
  )
}

export default App
