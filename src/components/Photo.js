import React, {useState, useEffect} from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
    color: #999999;
    font-family: arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 1px;
    text-align: center;
`;

const StyledPs = styled.p`
    color: #4c4a37; 
    font-family: 'Source Sans Pro', sans-serif; 
    font-size: 14px; 
    line-height: 32px; 
    margin: 0 0 24px;
`;

const Photo = (props) => {
    const photo = props.pictureData;
    console.log(props)
    return (
        <div className="Photo-of-the-Day">
            <StyledH1>Click the Button Above to generate picture from Nasa's Demo API Key</StyledH1>
                <div>
                <StyledH1>Picture Title: {photo.title}</StyledH1>
                <StyledPs>Picture Date: {photo.date}</StyledPs>
                <StyledPs>Picture Details: {photo.explanation}</StyledPs>
                <img src={photo.hdurl} alt="Photo of the Day"/>
                </div>    
            
        </div>
    )
}

export default Photo;