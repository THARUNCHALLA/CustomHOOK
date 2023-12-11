import useReuse from "../CustomHook"
const Final1=()=>{
    const [number,Increment,Decrement,Reset] = useReuse()
   
    return(
        <div>
           <h1>Count : {number}</h1>
           <div className="container">
           <button onClick={Increment}>Increment</button>
           <button onClick={Decrement}>Decrement</button>
           <button onClick={Reset}>Reset</button>
           </div>
        </div>
    )
}

export default Final1