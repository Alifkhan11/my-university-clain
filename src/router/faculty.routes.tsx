import FacultyDasbord from "../pages/faculty/FacultyDasbord";
import MyCourses from "../pages/faculty/MyCourses";

export const facultyPaths=[
    {
        name:'Dasbord',
        path:'dasbord',
        element:<FacultyDasbord/>
    },
    {
        name:'My Courses',
        path:'my-courses',
        element:<MyCourses/>
    },
]