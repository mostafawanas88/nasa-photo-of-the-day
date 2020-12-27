import React from "react";
import styled from "styled-components";


const StyledButtons = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Buttons = (props) => {
    const showData = props.getDataBtn;
    const hideData = props.hidPictureBtn
    return (
        <div>
        <StyledButtons onClick={showData}>Get Nasa Data</StyledButtons>
        <StyledButtons onClick={hideData}>Hide Nasa Data</StyledButtons>
        </div>
    )
}

export default Buttons;