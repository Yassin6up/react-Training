import React , {useEffect , useState} from 'react'
import axios from "axios"

function About() {

  const [user  , setUser] = useState({
    name : "",
    email : "",
    phone : "",
    age : "",
    country : "" , 
    photo : ""
  })

const [change , setChange] = useState(false)



  useEffect(()=>{
    axios.get('https://randomuser.me/api/').then((res)=>{
      let data  = res.data.results[0]
      setUser({
        name : data.name.first + ' ' +  data.name.last ,
        email : data.email,
        phone : data.phone,
        age : data.dob.age,
        country : data.location.country , 
        photo : data.picture.large
      })
    })
  },[change])
  

  return (
    <div className='Container'>
    <div className='photoProfileContainer'>
    <img src={user.photo} alt=""/>
    </div>
    <div className='InfoHeader'>
    <h2>{user.name}</h2>
    
    </div>
    <div className='MoreDetails'>
        <p>{user.phone}</p>
        <p>{user.age}</p>
        <p>{user.email}</p>
        <p>{user.country} </p>
    </div>
    <center>
    <button className='btn btn-primary' onClick={()=> setChange(!change) }>Change User</button>
</center>
    </div>
  )
}

export default About