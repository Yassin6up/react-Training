import React , {useState} from 'react'
import ContactCard from './subCompnents/ContactCard'
import { useDispatch , useSelector } from 'react-redux'
import { addContactList , deleteAll } from '../state/ListContactSlice/listContact'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

function Contact() {
const [name , setName] = useState()
const [last , setLast] = useState()
const [email , setEmail] = useState()
const [telephone , setTelephone] = useState()
const [matricule , setMatricule] = useState()
const dispatch = useDispatch()
const contactList  = useSelector((state)=> state.listContact.contacts )

  return (
    <Box className="w-100">
<center>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <TextField onChange={(e)=> setMatricule(e.target.value)} type='number' style={{width:"100%"}} margin="dense"  id="outlined-basic" label="Matricule" variant="outlined"  />
  </Grid>
  <Grid item xs={6}>
  <TextField onChange={(e)=> setTelephone(e.target.value)} style={{width:"100%"}} margin="dense" id="outlined-basic" label="Telephone" variant="outlined"  />
  </Grid>
  <Grid item xs={6}>
  <TextField onChange={(e)=> setName(e.target.value)} style={{width:"100%"}} margin="dense"  id="outlined-basic" label="name" variant="outlined"  />
  </Grid>
  <Grid item xs={6}>
  <TextField onChange={(e)=> setLast(e.target.value)} style={{width:"100%"}} margin="dense"  id="outlined-basic" label="last name" variant="outlined"  />
  </Grid>
</Grid>
  <TextField onChange={(e)=> setEmail(e.target.value)} style={{width:"60%"}} margin="dense"  id="outlined-basic" label="email" variant="outlined"  />

  </center>


  <button class="btn btn-primary" onClick={()=>{
    const date  = new Date()
    dispatch(addContactList({
      matricule : matricule , 
      name : name ,
      lastName : last , 
      telephone : telephone ,
      email : email ,
      date  : date.getFullYear()
    }))
  }} >Add Contact</button>
  <button class="btn btn-danger" onClick={ ()=> dispatch(deleteAll()) } >Vide</button>


<div className="cards">
{
  contactList.map((contact)=>{
    return <ContactCard matricule={contact.matricule}  name={contact.name} 
    lastName={contact.lastName}  
    email={contact.email}  
    telephone={contact.telephone}  
    date = {contact.date}
    />
  })
}
</div>
</Box>
  )
}

export default Contact