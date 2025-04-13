const { createSlice } = require("@reduxjs/toolkit");

const nameSlice=createSlice=({
    name : "name",
    initialState:"",
    reducers:{
        updateName:(state, action)=>{
        state=action.payload
        },
        updateSurname:(state)=>{
            state=""
        },
    },
})

export const {updateName , updateSurname} = nameSlice.actions

export default nameSlice.reducer