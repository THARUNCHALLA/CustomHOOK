import {useMemo,useState,useEffect} from "react"




import "./index.css"

const slowfunction=(first)=>{
    console.log("slow")
    for(let i=0;i<10000000;i++){}
    return first*2
}

const Final = ()=>{

    const [first,setfirst]=useState(0)
    const [dark,setDark] = useState(false)

    const doubleNumber = useMemo(()=>{
        return slowfunction(first)
    },[first])
    
    const STYLE=useMemo(()=>{
            return{
                backgroundColor:dark?"black":"white",
                color:dark?"white":"black",
                fontWeight:"bold"
            }
    },[dark])

    useEffect(()=>{
        console.log("theme changed")
    },[STYLE])

    return(
        <>
    <div>
        <input type="number" value={first} placeholder="Enter" onChange={(e)=>setfirst(Number(e.target.value))}/>
    </div>    
    <br/>
    <div>
        <button onClick={(e)=>setDark(!dark)}>Change Theme</button>
    </div>
    <p style={STYLE}>The number:{doubleNumber}</p>
    </>
    )

}

export default Final

