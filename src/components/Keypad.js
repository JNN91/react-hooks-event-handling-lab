import React from "react";

function Keypad (){

    function handlePassword(){
        console.log("Entering password...")
    }

    return (
        <div type="password" onChange={handlePassword} />
    )
}

export default Keypad;