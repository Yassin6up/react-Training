import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice/counter";
import usersSlice from "./userSlice/users";
import listContactSlice from "./ListContactSlice/listContact";
import ticketSlice from "./voyageSlice/ticket"

export default configureStore({
    reducer : {
        counter : counterSlice,
        users : usersSlice ,
        listContact : listContactSlice , 
        tickets : ticketSlice
    }
})
