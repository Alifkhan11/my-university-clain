/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form"
import PhForm from "../../../components/form/PhForm"
import { Button, Col, Flex } from "antd"
import PHSelect from "../../../components/form/PhSelect"
import { semesterOptions } from "../../../constants/semester"
import { monthOptions } from "../../../constants/global"
import { zodResolver } from "@hookform/resolvers/zod"
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema"
import { useAddAcademicSemesterMutation } from "../../../redux/fetures/admin/academicManagement.api"
import { toast } from "sonner"


const currentYear=new Date().getFullYear()
const yearOptions=[0,1,2,3,4].map(number=>({
    value:String(currentYear+number),
    label:String(currentYear+number)
}))


const CreateAcademicSemester=()=>{

    const [addAcademicSemester]=useAddAcademicSemesterMutation()

const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
    const toastId=toast.loading('Creating .....')
const name=semesterOptions[Number(data.name)-1].label
const semesterData={
    name,
    code:data.name,
    year:data.year,
    startMonth:data.startMonth,
    endMonth:data.endMonth
}

try {
    const res=await addAcademicSemester(semesterData).unwrap()
    if(res.error){
        toast.error(res.error.data.message,{id:toastId})
    }else{
        toast.success(res.message,{id:toastId})
    }
    console.log(res);
} catch (error:any) {
    // console.log(error);
    toast.error(error?.data?.message,{id:toastId})
    
}


}



   return (
    <Flex justify="center" align="center">
        <Col span={8}>
        <PhForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)} >
         <PHSelect label="Semester Name" name="name" options={semesterOptions}  />
         <PHSelect label="Year" name="year" options={yearOptions}  />
         <PHSelect label="Start Month" name="startMonth" options={monthOptions}  />
         <PHSelect label="End Month" name="endMonth" options={monthOptions}  />
         <Button htmlType="submit" >Submit</Button>
       </PhForm>
        </Col>
    </Flex>
       
   )
}

export default CreateAcademicSemester