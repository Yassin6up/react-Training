import React , {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useParams , useNavigate } from 'react-router-dom'
import { updateContact } from '../state/ListContactSlice/listContact'

function ContactUpdate() {
    const navigate = useNavigate()
    const contactList  = useSelector((state)=> state.listContact.contacts )

    const {matriculeId}  = useParams()

    const contact  = contactList.find((contact)=> +contact.matricule === +matriculeId )
    
    if(!contact){
        window.location.href = "http://localhost:3000/contact"
    }


    const [name , setName] = useState(contact.name)
    const [last , setLast] = useState(contact.lastName)
    const [email , setEmail] = useState(contact.email)
    const [telephone , setTelephone] = useState(contact.telephone)
    const [matricule , setMatricule] = useState(contact.matricule)
    const dispatch = useDispatch()
  

    
    


    return (
    <div className="w-100">
          <div class="form-row">
    <div class="form-group ">
      <label for="inputEmail4">Matricule</label>
      <input onChange={(e)=> setMatricule(e.target.value)} disabled value={matricule} type="number" class="form-control" id="inputEmail4" placeholder="Matricule"/>
    </div>
    <div class="form-group ">
      <label for="inputPassword4">Telephone</label>
      <input  onChange={(e)=> setTelephone(e.target.value)} value={telephone}  type="tel" class="form-control" id="inputPassword4" placeholder="Telephone"/>
    </div>
  </div>
  <div className='form-row'>
  <div class="form-group">
    <label for="inputAddress">Name</label>
    <input onChange={(e)=> setName(e.target.value)} value={name}  type="text" class="form-control" id="inputAddress" placeholder="Name"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Last Name</label>
    <input onChange={(e)=> setLast(e.target.value)}  value={last}  type="text" class="form-control" id="inputAddress2" placeholder="Last name"/>
  </div>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input onChange={(e)=> setEmail(e.target.value)}  value={email}  type="email" class="form-control" id="email" placeholder="Email :"/>
  </div>
  <button class="btn btn-primary" onClick={()=>{
    dispatch( updateContact({
        matricule : matricule , 
        name : name ,
        last : last ,
        email : email ,
        tele : telephone
    }))
    navigate('/contact')
  }} >Update</button>
    </div>
  )
}

export default ContactUpdate