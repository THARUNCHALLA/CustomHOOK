import {useReducer,useEffect,useState} from "react"
import Inside from "../Inside"

import Loader from "react-loader-spinner"

import "./index.css"


const API={
    success:"SUCCESS",
    loading:"Loading",
    failure:"Failure",
    Edit:"Editing"
}

const Final = ()=>{
    const [name,setname]=useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhNo] = useState("")
    const [username,setUsername] = useState("")
    const reducer=(state,action)=>{
        if(action.type==="Loading"){
            return{
                ...state,
                api:API.loading
            }
        }
        else if(action.type==="UpdateData"){
            return{
                ...state,
                data:action.payload,
                api:API.success
            }
        }
        else if(action.type==="Error"){
            return{
                ...state,
                api:API.failure
            }
        }
        else if(action.type==="Delete"){
                const updateData = state.data.filter(each=>each.id!==action.payload)
                return{
                    ...state,
                    data:updateData
                }
        }
        else if(action.type==="Edit"){
            return{
                ...state,
                api:API.Edit,
                isEditing:action.payload
            }
        }
        else if(action.type==="UPDATEdDATA"){
           const DATA12 = state.data.map((each)=>{
                if(each.id===action.payload.id){
                    return {...each,...action.payload}
                }
                else{
                    return each
                }
           })
           return{
            ...state,
            data:DATA12,
            api:API.success
        }
        }
    }
   
    const InitaialData={
        data: [],
        api:"",
        isEditing:{status:false,id:"",name:"",email:"",phone:"",username:""}
    }

    const getUserDetails=async()=>{
        dispatch({
            type:"Loading",
            payload:true
        })
            const Data = await fetch("https://jsonplaceholder.typicode.com/users");
            if (Data.ok===true){
            const Response = await Data.json()
            dispatch({
                type:"UpdateData",
                payload:Response
            })
           }
           else{
            dispatch({
                type:"Error"
            })
           }
    }

    useEffect(()=>{
        getUserDetails()
    },[])
    
    const [state,dispatch] = useReducer(reducer,InitaialData)


    const failure=()=>{
        return(
            <div>
            <h1 className="Error">Data Not Found</h1>
            </div>
        )
    }
   
    const loader=()=>{
        return(
            <div className="loader">
                <Loader type="TailSpin" color="blue" height={50} width={50} />
            </div>
        )
    }
   

    const handleSubmit = (event,ID,name,email,phone,username) => {
        event.preventDefault();
       const finalAnswer = {
        name,
        email,
        phone,
        username,
        id:ID
       }
       console.log(finalAnswer)
       dispatch({type:"UPDATEdDATA",payload:finalAnswer})
      };
    
   

    

    const Editing =()=>{
        const {id,name,email,phone,username}= state.isEditing
        const Name=(e)=>{
            setname(e.target.value)
        }
        const setemail=(e)=>{
            setEmail(e.target.value)
        }
        const PhNo=(e)=>{
            setPhNo(e.target.value)
        }
    
        const setusername=(e)=>{
            setUsername(e.target.value)
        }
    return(
        <form className="Form" onSubmit={(event) => handleSubmit(event,id,name,email,phone,username)}>
                <input type="text" placeholder="Enter Name" value={name} onChange={Name}/>
                <input type="text" placeholder="Enter Email" value={email} onChange={setemail}/>
                <input type="text" placeholder="Enter Ph No" value={phone} onChange={PhNo}/>
                <input type="text" placeholder="Enter UserName" value={username} onChange={setusername}/>
                <button type="submit" className="btn">Submit</button>
    </form>
    )}
    

    const onEditButton = (id,email,username,name,phone)=>dispatch({type:"Edit",payload:{status:true,id:id,email:email,username:username,name,phone:phone}})

    const onDeleteButton=id=>dispatch({type:"Delete",payload:id})

    

    const successView=()=>{
        return(
        <ul>{
            state.data.map(each=><Inside user={each} key={each.id} onDeleteButton={onDeleteButton} onEditButton={onEditButton}/>)}</ul>)
    }

    const FinalAns = ()=>{
        switch(state.api){
            case API.success:
                return successView()
            case API.loading:
                return loader()  
            case API.failure:
                return failure()    
            case API.Edit:
                return Editing()    
            default:
                return null    
        }
    }


    return(
        <div className="text">
            <h1 className="head">Personal Details</h1>
            {FinalAns()}
        </div>
    )
}

export default Final

