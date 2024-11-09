/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd"
import PhForm from "../../../components/form/PhForm"
import PHSelect from "../../../components/form/PhSelect"
import { FieldValues, SubmitHandler } from "react-hook-form"
import PhInput from "../../../components/form/PhInput"
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/fetures/admin/courseManagementAPI"
import { TCourse } from "../../../types/courseManagement"
import { toast } from "sonner"

const CreateCourses=()=>{


const {data:courses}=useGetAllCoursesQuery(undefined)
const [addCourse]=useAddCourseMutation()

const preRequestCoursesOption=courses?.data?.map((item:TCourse)=>({
    value:item._id,
    label:item.title
}))





const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
    const toastId=toast.loading('Creating .....')
const courseData={
    ...data,
    code:Number(data.code),
    credits:Number(data.credits),
    preRequisiteCourses: data.preRequisiteCourses?data.preRequisiteCourses.map((item: any)=>({
        course:item,
        isDeleted:false
    })):[]
}
console.log(courseData);


try {
    const res=await addCourse(courseData).unwrap()
    if(res.error){
        toast.error(res.error.data.message,{id:toastId})
    }else{
        toast.success(res.message,{id:toastId})
    }
    console.log(res);
} catch (error:any) {
    console.log(error);
    toast.error(error?.data?.message,{id:toastId})
    
}


}



   return (
       <div>
            <Flex justify="center" align="center">
        <Col span={8}>
        <PhForm onSubmit={onSubmit}  >


     
    
         <PhInput type="text" name="title" label="Title" />
         <PhInput type="text" name="prefix" label="Prefix" />
         <PhInput type="text" name="code" label="Code" />
         <PhInput type="text" name="credits" label="Credits" />
         <PHSelect 
         mode="multiple" 
         name="preRequisiteCourses"
         label="Pre Requisite Courses"
         options={preRequestCoursesOption}



         />
         <Button htmlType="submit" >Submit</Button>
       </PhForm>
        </Col>
    </Flex>
       </div>
   )
}

export default CreateCourses