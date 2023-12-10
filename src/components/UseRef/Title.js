import React from "react"

const Title=()=>{
    console.log("title")
    return(<div>
        <h1>usecallback and React.memo</h1>
    </div>
    )
}

export default React.memo(Title)