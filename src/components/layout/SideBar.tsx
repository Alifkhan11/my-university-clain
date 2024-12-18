/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../router/admin.router";
import { facultyPaths } from "../../router/faculty.routes";
import { studentPaths } from "../../router/student.router";
import { useAppSelector } from "../../redux/hooks";
import {  useCurrentToken } from "../../redux/fetures/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
const { Sider } = Layout;


const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student',
    SUPERADMIN: 'superAdmin',
};

const SideBar = () => {

    const token = useAppSelector(useCurrentToken)
    let user:any;
    if(token){
        user=verifyToken(token)
    }
    const role = user?.role
    let sidebarItems

    switch (role) {
        case userRole.ADMIN:``
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break
        case userRole.SUPERADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.SUPERADMIN)
            break
        default:
            break;

    }

    return (

        <Sider
        style={{height:'100vh', position:"sticky", top:'0' ,left:'0'}}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div
                style={{
                    color: 'white',
                    height: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1>PH Uni</h1>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={sidebarItems}
            />
        </Sider>

    );
};

export default SideBar;