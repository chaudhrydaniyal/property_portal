import React, { useState } from 'react'
import "./home.css"
import Sliders from "../../Components/Slider/Slider"
import { Button } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";

const Home = () => {

  const [search, setSearch] = useState("");


  return (
    <>
      <div className='header'>
      <div className='d-flex justify-content-center'>
          <div style={{ marginTop: "15%", opacity: "0.9" }}>
            <input style={{ width: "300px", height:"38px", borderRadius:"5px", borderColor:"white" }} onChange={(e) => setSearch(e.target.value)}></input>
            
            <Link to="/propertyListing"
             state={{
              search: search
            }}
            >
            
            <Button variant="success" className='ms-2' onClick={() => {

              console.log("search: ",search)
             
            }
            }>Search</Button>
            </Link>
            <br />
          </div>
        </div>
      </div>
      <div style={{ padding: "0px 167px", marginBottom: "50px" }} > <Sliders /></div>
    </>
  )
}

export default Home;
