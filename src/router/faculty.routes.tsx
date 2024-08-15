import FacultyDasbord from "../pages/faculty/FacultyDasbord";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths=[
    {
        name:'Dasbord',
        path:'dasbord',
        element:<FacultyDasbord/>
    },
    {
        name:'Offered Courses',
        path:'offered-courses',
        element:<OfferedCourse/>
    },
]