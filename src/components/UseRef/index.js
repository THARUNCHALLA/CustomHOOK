import React,{ useState,useCallback } from "react"
import Button from "../Button"
import Count from "./Count"
import Title from "./Title"
import "./index.css"



const final=()=>{
    
    const [age,setage]= useState(21);
    const [salary,setsalary]= useState(7000);

    const increamentAge= useCallback(()=>{
        setage(age+1)
    },[age])

    const increamentsalary=useCallback(()=>{
        setsalary(salary+1000)
    },[salary]
    )



    
    return(
        <div className="center12">
           <Title/>
           <Count text={"age"} number={age}/>
           <Button clickHandler={increamentAge}>Increment age</Button>
           <Count text={"salary"} number={salary}/>
           <Button clickHandler={increamentsalary}>Increment salary</Button>
        </div>
    )
}

export default final