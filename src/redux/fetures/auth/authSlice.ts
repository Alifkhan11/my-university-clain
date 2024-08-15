import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser ={
    id:string,
    role:string,
    iat:number,
    exp:number
}
type TAuthStatus={
    user:null|TUser,
    token:null|string
}
const initialState:TAuthStatus={
    user:null,
    token:null
}


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const {user,token}=action.payload
            state.user=user,
            state.token=token
        },
        logout:(state)=>{
            state.user=null,
            state.token=null
        }
    }
})

export const {setUser,logout}=authSlice.actions

export default authSlice.reducer

export const useCurrentToken=(state:RootState)=>state.auth.token
export const selectCurrentUser=(state:RootState)=>state.auth.user