import React from "react";
import Personal from "./components/Personal";
import CV from "./components/CV"

export default function App (){
    return(
        <div className="app--container">
            <div className="left-side"> 
                <Personal/> 
            </div>
            <div className="right-side">
                <CV/>
            </div>
        </div>
    )
}