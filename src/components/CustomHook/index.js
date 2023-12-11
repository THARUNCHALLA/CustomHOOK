import { useState,useEffect} from "react"

const useReuse=(INITIAL=0)=>{
    const [number,setnumber] = useState(INITIAL)

    useEffect(()=>{
        document.title = `number-${number}`
    },[number])

    const Increment=()=>{
        setnumber(number+1)
    }
    const Decrement=()=>{
        setnumber(number-1)
    }
    const Reset=()=>{
        setnumber(INITIAL)
    }
    return [number,Increment,Decrement,Reset]
}

export default useReuse