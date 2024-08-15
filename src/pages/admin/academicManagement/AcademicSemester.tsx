import { useGetAllSemesterQuery } from "../../../redux/fetures/academicSemester/academicSemesterApi"




const AcademicSemester=()=>{
    const {data,isLoading}=useGetAllSemesterQuery(undefined)
    console.log(isLoading,data);
    if(isLoading){
        <p>Loading....................</p>
    }
    if(data?.success){
        <p>{data?.message}</p>
    }

   

   return (
       <div>
           <h1>Hello , AcademicSemester !</h1>
       </div>
   )
}

export default AcademicSemester