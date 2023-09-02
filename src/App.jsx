import React from "react";
import Form from "./components/Form";
import CV from "./components/CV"

export default function App (){
    const [formData, setFormData] = React.useState( () =>  JSON.parse(localStorage.getItem("datas")) || {
        fullName:"",
        email:"",
        phoneNumber:"",
        address:"",
        college:"",
        degree:"",
        startDate:"",
        endDate:"",
        company:"",
        position:"",
        companyStartDate:"",
        companyEndDate:"",
        location:"",
        jobDescription:""
    })
React.useEffect(() => {
        localStorage.setItem("datas", JSON.stringify(formData))
},[formData])

   function handleChangeEvent(event){
    const{name, value} = event.target
    return setFormData(prevData  => ({
        ...prevData,
        [name]:value    
    }))
   }
   console.log(formData)
    return(
        <div className="app--container">
            <div className="left-side"> 
                <Form
                formData={formData}
                handleChangeEvent={handleChangeEvent}
                /> 
            </div>
            <div className="right-side">
                <CV
                formData={formData}
                />
            </div>
        </div>
    )
}