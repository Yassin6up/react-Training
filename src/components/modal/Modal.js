import React , {useState} from 'react'
import { openModal } from '../../state/voyageSlice/ticket'
import { useDispatch } from 'react-redux'
import { addTicket } from '../../state/voyageSlice/ticket'
function Modal() {

    const dispatch   = useDispatch ()
    const handleReturn = ()=>{
        dispatch(openModal(false))
    }



    const [name , setName] = useState("")
    const [depart , setDepart] = useState("")
    const [destination , setDestination] = useState("")
    const [price , setPrice] = useState("")

    const fillinputs =  (e)=>{
      if(e.target.id === "Name"){
        setName(e.target.value)
      }else if(e.target.id === "depart"){
        setDepart(e.target.value)
      }else if(e.target.id === "distination"){
        setDestination(e.target.value)
      }else if(e.target.id === "prix"){
        setPrice(e.target.value)
      }
    }

const handelClick = ()=>{
  const date = new Date()

  const ticketObject = {
    name : name ,
    depart : depart , 
    destination : destination ,
    price : price , 
    date : date.getFullYear() + '-'+ date.getMonth() + "-" + date.getDay() + '  ' + date.getHours() + ":" + date.getMinutes()
  }
  dispatch(addTicket(ticketObject))
  dispatch(openModal(false))
}


  return (
    <div class="modal flex flex-col justify-center px-6 py-12 bg-white absolute top-1/2 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <svg onClick={handleReturn} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create New Voyage</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      
        <div>
          <label for="Name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <input onChange={fillinputs} id="Name" name="email" type="Name" autocomplete="Name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="depart" class="block text-sm font-medium leading-6 text-gray-900">depart</label>
          </div>
          <div class="mt-2">
            <input id="depart" onChange={fillinputs} type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="distination" class="block text-sm font-medium leading-6 text-gray-900">Destination</label>
          </div>
          <div class="mt-2">
            <input id="distination" onChange={fillinputs} name="text" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="prix" class="block text-sm font-medium leading-6 text-gray-900">Prix</label>
          </div>
          <div class="mt-2">
            <input id="prix" onChange={fillinputs}  type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        
  
        <div>
          <button type="submit" onClick={handelClick} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
        </div>
      
    </div>
  </div>
  )
}

export default Modal