import { useParams } from "react-router-dom"
import { useGetSingleStudentQuery } from "../../../redux/fetures/admin/userManagementApi"
import { Spin } from "antd"

const StudentDetails=()=>{
    const params=useParams()
    const {studentID}=params
    const {data}=useGetSingleStudentQuery({id:studentID})

    if(!data){
        return <Spin style={{
            display:"flex",
            justifyContent:"center",
            marginTop:"200px"
        }} tip='Loading' size="large"></Spin>
    }
    const student=data?.data[0];
    
    
   return (
       <div>
           <h1>Name : {student.fullName}</h1>
           <h1>Email : {student.email}</h1>
           <h1>Contact : {student.contactNo}</h1>
           <h1>Emargecy Contact  : {student.emargencyContactNo}</h1>
           <h1>Birth  Date : {student.dathOfBirth}</h1>
           <h1>Blood Group : {student.bloodGroup}</h1>
           <h1>Gender : {student.gender}</h1>
           <h1>Roll : {student.id}</h1>
           <h1>Present Address : {student.presentAddress}</h1>
           <h1>Permanent Address : {student.permanentAddres}</h1>
           <h1>Role : {student.user.role}</h1>
          
       </div>
   )
}

export default StudentDetails