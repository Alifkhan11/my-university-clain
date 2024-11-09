import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Course from "../pages/admin/courseManagement/Course";
import CreateCourses from "../pages/admin/courseManagement/CreateCourses";
import OfferCourses from "../pages/admin/courseManagement/OfferCourses";
import RegistertSemester from "../pages/admin/courseManagement/RegistertSemester";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import CreateAdmine from "../pages/admin/userManagement/CreateAdmine";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";


export const adminPaths = [
    {
        name: 'Dasbord',
        path: 'dasbord',
        element: <AdminDashboard />
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Create A. Semester',
                path: 'create-academic-semister',
                element: <CreateAcademicSemester/>
            },
            {
                name: 'Academic Semester',
                path: 'academic-semister',
                element: <AcademicSemester />
            },
            {
                name: 'Create A. Faculty',
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty/>
            },
            {
                name: 'Academic Faculty',
                path: 'academic-faculty',
                element: <AcademicFaculty />
            },
            {
                name: 'Create A. Department',
                path: 'create-academic-department',
                element: <CreateAcademicDepartment/>
            },
            {
                name: 'Academic Department',
                path: 'academic-department',
                element: <AcademicDepartment />
            },
          
        ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
            {
                name: 'Student',
                path: 'students-data',
                element: <StudentData />
            },
            {
                //Student Details
                path: 'student-data/:studentID',
                element: <StudentDetails />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmine />
            },
        ]
    },
    {
        name: 'Course Management',
        children: [
            {
                name: 'Semester Registration',
                path: 'semester-registration',
                element: <SemesterRegistration />
            },
            {
                name: 'Registration Semester',
                path: 'registration-semester',
                element: <RegistertSemester />
            },
            {
                name: 'Create Coures',
                path: 'create-courese',
                element: <CreateCourses />
            },
            {
                name: 'Coures',
                path: 'courese',
                element: <Course />
            },
            {
                name: 'Offer Coures',
                path: 'offer-courese',
                element: <OfferCourses />
            },
          
          
        ]
    },
]


// export const admineRouter = adminPaths.reduce((acc: TRoute[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
// }, [])




// export const adminSidebarItem = adminPaths.reduce((acc:TSidebarItem[], item) => {
//     if (item.path && item.name) {
//         acc.push({
//             key: item.name,
//             label : <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//         })
//     }
//     if (item.children) {
//         acc.push({
//           key: item.name,
//           label: item.name,
//           children: item.children.map((child) => ({
//             key: child.name,
//             label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//           })),
//         });
//       }
  
//       return acc;
// }, [])

// export const adminPath = [
//     {
//         // path:'dasbord',
//         index: true,
//         element: <AdminDashboard />
//     },
//     {
//         path: 'dasbord',
//         // index:true,
//         element: <AdminDashboard />
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent />
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty />
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmine />
//     },
// ]