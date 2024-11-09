/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { logout, useCurrentToken } from "../../redux/fetures/auth/authSlice"
import { Navigate } from "react-router-dom"
import { verifyToken } from "../../utils/verifyToken"

type TPeotextedRout={
    children:ReactNode,
    role:string[] 
}

const ProtectRouter = ({ children,role }: TPeotextedRout) => {
    const dispatch=useAppDispatch()
    const token = useAppSelector(useCurrentToken)
    let user:any;
    if(token){
        user=verifyToken(token)
    }
    console.log(user);
    
    
    // const user=useAppSelector(selectCurrentUser)
    const userRole=user?.role ??''
    
    if(role!==undefined && !role.includes(userRole)||''){
        dispatch(logout())
        return <Navigate to='/login' replace={true} />
    }
    
    
    if (!token) {
        dispatch(logout())
        return <Navigate to='/login' replace={true} />
    }
    return children
}

export default ProtectRouter