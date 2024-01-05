import { createSlice } from "@reduxjs/toolkit";


const listContactSlice  = createSlice({
    name: "listContact" , 
    initialState : {
        contacts : []
    },
    reducers : {
        addContactList : (state , action)=>{
            state.contacts.push(action.payload)
        },
        deleteAll : (state)=>{
            state.contacts = []
        } , 
        deleteContact : (state  , action)=>{
            let matricule = action.payload
            state.contacts = state.contacts.filter((contact)=> contact.matricule !==  matricule)
        }, 
        updateContact : (state , action)=>{
            let matricule  = action.payload.matricule
            let contact = state.contacts.find((contact)=> contact.matricule === matricule )
            if(contact){
                contact.name  = action.payload.name 
                contact.lastName = action.payload.last 
                contact.email = action.payload.email 
                contact.telephone = action.payload.tele
            }
        }
    }
    
})

export const {addContactList  , deleteAll , deleteContact , updateContact } = listContactSlice.actions
export default listContactSlice.reducer