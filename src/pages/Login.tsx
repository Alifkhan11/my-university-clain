import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/fetures/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/fetures/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";


type TDefaultValues = {
    id: string
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [Login, { error }] = useLoginMutation()
    console.log(error);

    const onsubmit = async (data: any) => {
        const toadtId = toast.loading('Loggiog in')
        try {
            const userInfo = {
                id: data.id,
                password: data.password
            }
            const res = await Login(userInfo).unwrap()
            const user = verifyToken(res.data.accessToken) as TUser
            dispatch(setUser({ user, token: res.data.accessToken }))
            toast.success('Logging in Successfully', { id: toadtId, duration: 2000 })
            const role = user.role
            navigate(`/${role}/dasbord`)
        } catch {
            toast.error('Something is wrong', { id: toadtId, duration: 2000 })
        }
    }
    const defaultValues: TDefaultValues = {
        id: '0001',
        password: 'Admin9876'
    }
    return (
        <Row justify='center' align='middle' style={{ height: '100vh' }}>
            <PhForm onSubmit={onsubmit} defaultValues={defaultValues}>
                <div>
                    <PhInput type='text' name='id' label='User Id : ' />
                </div>
                <div>
                    <PhInput type='password' name='password' label='Password : ' />
                </div>
                <Button htmlType="submit">Login</Button>
            </PhForm>
        </Row>
    );
};

export default Login;