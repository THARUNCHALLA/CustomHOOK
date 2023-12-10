import "./index.css"


const Index=(props)=>{
    const {user,onDeleteButton,onEditButton} = props
    const {name,email,username,id,phone}=user

    const onDelete=()=>onDeleteButton(id)

    const onEdit=()=>onEditButton(id,email,username,name,phone)

    return(
        <li>
            <h1 className="head">Name: {name}</h1>
            <h1 className="head">Gmail: {email}</h1>
            <p className="head">PHONE NO: {phone}</p>
            <h1 className="head">UserName: {username}</h1>
            <div>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit</button>
            </div>
        </li>
    )
}

export default Index