import { createSlice } from "@reduxjs/toolkit";


const ticket  = createSlice({
    name: "ticket" , 
    initialState : {
        ticketsList : [] ,
        isOpen : false
    },
    reducers : {
        addTicket : (state ,  action)=>{
            state.ticketsList.push(action.payload)
        },
        openModal : (state , action)=>{
            state.isOpen = action.payload
        }
    }
    
})

export const {addTicket , openModal} = ticket.actions
export default ticket.reducer