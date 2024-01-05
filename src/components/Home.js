import React, {useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addUser , deleteUser } from '../state/userSlice/users'
import { Link } from 'react-router-dom'
function Home() {
const [ name , setName] = useState("")
const [email , setEmail] = useState('')



const dispatcher = useDispatch()


  const users = useSelector((state)=> state.users.users)

  return (
    <section class="vh-100 vw-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">

            <h4 class="text-center my-3 pb-3">To Do App</h4>

              <div class="col-12">
                <div class="flex">
                  <input onChange={(e)=> setName(e.target.value) } type="text" id="form1" class="form-control" placeholder='Name' />
                  <input onChange={(e)=> setEmail(e.target.value) }   type="email" id="form2" class="form-control" placeholder='Email' />
                </div>
              </div>

              <div class="col-12">
                <button onClick={()=> dispatcher(addUser(
                {
                  id : users.length + 1 ,
                  name : name , 
                  email : email
                }
                ))}  class="btn btn-primary">Save</button>
              </div>

            <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">Id.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user)=>{
                return <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button class="btn btn-danger" onClick={() => dispatcher(deleteUser(user.id)) } >Delete</button>
                    <Link to={`/updateUser/${user.id}`} class="btn btn-success ms-1">Update</Link>
                  </td>
                </tr>
              })}
                
                
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Home