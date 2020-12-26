import React from "react";

const Buttons = (props) => {
    return (
        <div>
        <button onClick={props.getDataBtn}>Get Nasa Data</button>
        <button onClick={props.hidPictureBtn}>Hide Nasa Data</button>
        </div>
    )
}

export default Buttons;