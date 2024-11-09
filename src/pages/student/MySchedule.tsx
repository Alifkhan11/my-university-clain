import {  useGetAllEnrollCoursesQuery } from "../../redux/fetures/student/studentCourseManagement.api"

const MySchedule=()=>{

    const {data}=useGetAllEnrollCoursesQuery(undefined)
    console.log(data);
    

   return (
       <div>
           {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.data.map((item:any)=>{
                return<>
                <div>
                    <h1>{item.course.title}</h1>
                </div>
                </>
            })
           }
       </div>
   )
}

export default MySchedule