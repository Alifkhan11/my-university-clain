import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/fetures/auth/authSlice";
import { toast } from "sonner";

const { Header, Content } = Layout;




const MainLayout = () => {

  const dispatch = useAppDispatch()
  const handelLogout = () => {
    const toastid=toast.loading('Logging out')
    try {
      dispatch(logout())
      toast.success("Logout Successfully",{id:toastid,duration:2000})
    } catch {
      toast.error('Something want wrong',{id:toastid,duration:2000})
    }
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <SideBar />
      <Layout>
        <Header>
          <Button onClick={handelLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>

  );
};

export default MainLayout;