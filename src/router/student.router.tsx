import MySchedule from "../pages/student/MySchedule";
import OfferedCourses from "../pages/student/OfferedCourses";
import StudentDasbord from "../pages/student/StudentDasbord";

export const studentPaths=[
    {
        name:'Dasbord',
        path:'dasbord',
        element:<StudentDasbord/>
    },
   
    // {
    //     name:'Enroll Courses',
    //     path:'enroll-courses',
    //     element:<EnrollCourses/>
    // },
    {
        name: 'Offer Coures',
        path: 'offer-courese',
        element: <OfferedCourses />
    },
    {
        name: 'My Schedule',
        path: 'my-schedule',
        element: <MySchedule />
    },
]