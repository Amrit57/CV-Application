import React from "react";
import Form from "./components/Form";
import CV from "./components/CV"

export default function App (){
    return(
        <div className="app--container">
            <div className="left-side"> 
                <Form/> 
            </div>
            <div className="right-side">
                <CV/>
            </div>
        </div>
    )
}