import React from 'react'
import "./home.css"
import Sliders from "../../Components/Slider/Slider"
import { Button } from 'react-bootstrap'
const Home = () => {

  return (
    <>
      <div className='header'>
        {/* <div className='d-flex justify-content-center'>
          <div style={{ marginTop: "15%", opacity:"0.9" }}>
            <input style={{width:"300px"}}></input>
            <Button variant="success" className='ms-3'>Search</Button>
          </div>
        </div> */}
      </div>
      <div style={{ padding: "0px 167px", marginBottom: "50px" }} > <Sliders /></div>
    </>
  )
}

export default Home;
