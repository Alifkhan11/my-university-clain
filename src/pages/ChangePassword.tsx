import { Button, Row } from "antd"
import PhForm from "../components/form/PhForm"
import PhInput from "../components/form/PhInput";
import { useChangePasswordMutation } from "../redux/fetures/auth/authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/fetures/auth/authSlice";

const ChangePassword=()=>{

    const [changePassword]=useChangePasswordMutation()
    const navigate=useNavigate()
    const dispatch=useAppDispatch()


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit=async(data: any)=>{
        const res=await changePassword(data)
        if(res?.data?.success){
            dispatch(logout())
            toast.success(res?.data?.message);
            navigate(`/login`)
        }
        
    }
   return (
       <div>
           <Row justify='center' align='middle' style={{ height: '100vh' }}>
            <PhForm onSubmit={onSubmit}>
                <PhInput type="text" name="oldPassword" label="Old Password" />
                <PhInput type="text" name="newPassword" label="New Password" />
                <Button htmlType="submit">Login</Button>
            </PhForm>
           </Row>
       </div>
   )
}

export default ChangePassword