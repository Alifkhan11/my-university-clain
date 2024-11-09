import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.router";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.router";
import ProtectRouter from "../components/layout/ProtectRouter";
import ChangePassword from "../pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/superAdmin',
    element: <ProtectRouter role={['admin','superAdmin']}>
      <App/>
    </ProtectRouter>,
    children: routeGenerator(adminPaths)
  },
  {
    path: '/admin',
    element: <ProtectRouter role={['admin','superAdmin']}>
      <App/>
    </ProtectRouter>,
    children: routeGenerator(adminPaths)
  },
  {
    path: '/faculty',
    element: <ProtectRouter role={['faculty']}>
    <App/>
  </ProtectRouter>,
    children: routeGenerator(facultyPaths)
  },
  {
    path: '/student',
    element: <ProtectRouter role={['student']}>
    <App/>
  </ProtectRouter>,
    children: routeGenerator(studentPaths)
  },
  {
    path: '/change-password',
    element: <ChangePassword />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
])

export default router