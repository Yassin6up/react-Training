import React , {useState , useEffect} from 'react'
import Table  from './subCompnents/Table'


function Login() {
const [matricule , setMatricule ] = useState(0)
const [firstName , setFirstName] = useState('')
const [lastName , setLastName] = useState("")
const [note , setNote ] = useState("")

const [list , SetList] = useState([])

const [click , setClick] = useState(false)




    const handleChange = (event)=>{
        if(event.target.id === "Matricule"){
            setMatricule(event.target.value)
        }else if(event.target.id === "Name"){
            setFirstName(event.target.value)
        }
        else if(event.target.id === "Last"){
            setLastName(event.target.value)
        }
        else if(event.target.id === "Note"){
            setNote(event.target.value)
        }
    }



    useEffect(()=>{

        let newStagier = {
            matricule : matricule,
            firstName : firstName,
            lastName :lastName,
            note : note
    }
    
    list.push(newStagier)

    } , [click])


    const handleClick  = ()=>{
        setClick(!click)
    }
    

  return (
    <div>
        <div className='form'>
        <label>Matricule</label>
        <input type='text' id="Matricule" onChange={handleChange} />
        <label>Name</label>
        <input type='text' id="Name" onChange={handleChange} />
        <label>Last Name</label>
        <input type='text' id="Last" onChange={handleChange} />
        <label>Note</label>
        <input type='text' id="Note" onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
        </div>
        
        <Table list ={list} />
    </div>
  )
}

export default Login