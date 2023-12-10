import React from "react"

const Count=(props)=>{
    
    const {text,number}=props
    console.log(`${text} is rendered`)
    return(
        <div>
            <h1>{text} : {number}</h1>
        </div>
    )
}

export default React.memo(Count)