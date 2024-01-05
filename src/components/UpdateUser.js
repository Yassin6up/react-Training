import React , {useState} from 'react'
import { useParams } from 'react-router-dom'
import { updateUser } from '../state/userSlice/users'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function UpdateUser() {
    const {id} = useParams()
    
    const [ name , setName] = useState("")
    const [email , setEmail] = useState('')
    const navigate = useNavigate()
const dispatcher = useDispatch()
    const handleClick  = ()=>{
        const data  = {
            id : +id ,
            name : name ,
            email : email
        }
        dispatcher(updateUser(data))
        navigate("/")
    }


  return (
    <div>
        <input onChange={(e)=> setName(e.target.value)}  type="text" id="form1" class="form-control" placeholder='Name' />
        <input  onChange={(e)=> setEmail(e.target.value)}  type="email" id="form2" class="form-control" placeholder='Email' />
        <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default UpdateUser