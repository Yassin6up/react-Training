import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
    name : "users" , 
    initialState : {
        users : []
    },
    reducers : {
        addUser : (state , action)=>{
            state.users.push(action.payload)
        },
        updateUser : (state , action)=>{
            let user  = state.users.find((user)=> user.id === action.payload.id  )
            if(user){
                user.name  = action.payload.name
                user.email  = action.payload.email
            }
        },
        deleteUser : (state , action)=>{
            state.users =  state.users.filter(user => user.id !== action.payload  )
        } 
    }
})

export const { addUser , updateUser , deleteUser } = usersSlice.actions
export default usersSlice.reducer

