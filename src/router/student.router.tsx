import EnrollCourses from "../pages/student/EnrollCourses";
import StudentDasbord from "../pages/student/StudentDasbord";

export const studentPaths=[
    {
        name:'Dasbord',
        path:'dasbord',
        element:<StudentDasbord/>
    },
    {
        name:'Enroll Courses',
        path:'enroll-courses',
        element:<EnrollCourses/>
    },
]