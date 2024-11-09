/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd"
import PhForm from "../../../components/form/PhForm"
import PHSelect from "../../../components/form/PhSelect"
import { FieldValues, SubmitHandler } from "react-hook-form"
import {  semesterStatusOptions } from "../../../constants/semester"

import { useAddRegistrationSemesterMutation } from "../../../redux/fetures/admin/courseManagementAPI"
import { useGetAllSemesterQuery } from "../../../redux/fetures/admin/academicManagement.api"
import PhDatePicker from "../../../components/form/PhDatePicker"
import PhInput from "../../../components/form/PhInput"
import { toast } from "sonner"

const SemesterRegistration=()=>{

const [addSemester]=useAddRegistrationSemesterMutation()
const {data: academicSemester}=useGetAllSemesterQuery([
    {name:'sort',value:'year'}
])


const academicSemesterOption=academicSemester?.data?.map((item)=>({
    value:item._id,
    label: `${item.name} ${item.year}`
}))


const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
    const toastId=toast.loading('Creating .....')
const semesterData={
    ...data,
    minCredit:Number(data.minCredit),
    maxCredit:Number(data.maxCredit)
}
console.log(semesterData);


try {
    const res=await addSemester(semesterData).unwrap()
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
       <div>
            <Flex justify="center" align="center">
        <Col span={8}>
        <PhForm onSubmit={onSubmit}  >
         <PHSelect label="Academic Semester" name="academicSemester" options={academicSemesterOption}  />
         <PHSelect label="Status" name="status" options={semesterStatusOptions}  />
         <PhDatePicker label="Start Date" name="startDate"  />
         <PhDatePicker label="End Date" name="endDate"  />
         <PhInput type="text" name="maxCredit" label="Max Cradit" />
         <PhInput type="text" name="minCredit" label="Min Cradit" />
         <Button htmlType="submit" >Submit</Button>
       </PhForm>
        </Col>
    </Flex>
       </div>
   )
}

export default SemesterRegistration