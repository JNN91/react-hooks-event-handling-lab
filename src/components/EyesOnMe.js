
import React from "react";

function EyesOnMe() {

   let watching = () => console.log(`Good!`)
   let distracted = () => console.log(`Hey! Eyes on me!`) 

   return (
      <React.Fragment>
         <button onFocus={watching} onBlur={distracted}>Eyes on me</button>
      </React.Fragment>
   )
}

export default EyesOnMe;
