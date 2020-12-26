import React, {useState, useEffect} from "react"

const Photo = (props) => {
    const photo = props.pictureData;
    console.log(props)
    return (
        <div className="Photo-of-the-Day">
            <h2>Click the Button below to generate picture from Nasa's Demo API Key</h2>
                <div>
                <h1>Picture Title: {photo.title}</h1>
                <p>Picture Date: {photo.date}</p>
                <p>Picture Details: {photo.explanation}</p>
                <img src={photo.hdurl} alt="Photo of the Day"/>
                </div>    
            
        </div>
    )
}

export default Photo;