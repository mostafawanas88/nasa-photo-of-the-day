import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Photo from "./components/Photo"
import Header from "./components/Header"
import Buttons from "./components/Buttons"

function App() {
  const [picture, setPicture] = useState("");
  
  const getData = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => setPicture(response.data))
      .catch(err => console.log("Error from Server, please check API Key"))
  }
  
  useEffect(() => {
      getData()
    }, [])  
    
    const hidePicture = () => {
      setPicture("");
    }
  
  return (
    <div className="App">
      <Header />
      <Buttons getDataBtn={getData} hidPictureBtn={hidePicture}/>
      <Photo pictureData={picture}/>
    </div>
  );
}

export default App;
