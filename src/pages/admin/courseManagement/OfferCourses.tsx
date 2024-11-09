import { Button, Col, Flex } from "antd"
import PhForm from "../../../components/form/PhForm"
import PhInput from "../../../components/form/PhInput"
import { useGetAcademicDepartmentQuery, useGetAcademicFacultiesQuery } from "../../../redux/fetures/admin/academicManagement.api"
import PHSelectWatch from "../../../components/form/PHSelectWatch"
import { useState } from "react"
import {  useCreateOfferCourseMutation, useGetAllCoursesQuery, useGetAllRegistrationSemesterQuery, useGetCourseFacultiesQuery } from "../../../redux/fetures/admin/courseManagementAPI"
import PHSelect from "../../../components/form/PhSelect"
import moment from "moment"
import { weekDaysOptions } from "../../../constants/global"
import PHTimePicker from "../../../components/form/PHTimePicker"
import { toast } from "sonner"

const OfferCourses=()=>{

    const [courseId,setCourseId]=useState("")

    const [addOfferedCourse]=useCreateOfferCourseMutation()

    const {data:semesterRegistrationData}=useGetAllRegistrationSemesterQuery([
        {name:'sort',value:'year'},
        {name:'status', value:'UPCOMING'}
    ])

    const {data:academicDepartmentData}=useGetAcademicDepartmentQuery(undefined)

    const {data:courseData}=useGetAllCoursesQuery(undefined)

    const {data:facultiesData,isFetching:fatchingFaculties}=useGetCourseFacultiesQuery(courseId,{skip:!courseId})

    const {data:academicFacultyData}=useGetAcademicFacultiesQuery(undefined)

    const semesterRegistrationOption=semesterRegistrationData?.data?.map((item)=>({
        value:item._id,
        label:`${item.academicSemester.name} ${item.academicSemester.year}`
    }))
    

    const academicFacultiesOptions=academicFacultyData?.data?.map((item)=>({
        value:item._id,
        label:item.name
    }))

    const academicDepartmentOption=academicDepartmentData?.data?.map((item)=>({
        value:item._id,
        label:item.name
    }))

    const courseOption=courseData?.data?.map((item)=>{
        return{
            value:item._id,
            label:item.title
        }
    })
// console.log(facultiesData?.data.faculties);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const facultiesOption=facultiesData?.data.faculties?.map((item:any)=>{
        return {
            value:item._id,
            label:item.fullName
        }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit= async(data: any)=>{

        const offerdCourseData={
            ...data,
            maxCapacity:Number(data.maxCapacity),
            section:Number(data.section),
            startTime:moment(new Date(data.startTime)).format('HH:mm'),
            endTime:moment(new Date(data.endTime)).format('HH:mm')
        }
            const res=await addOfferedCourse(offerdCourseData)
            if(res?.data?.success){
                toast.success(res?.data?.message)
            }else{
                toast.error('Invalid Data')
            }
        
    }


   return (
       <div>
           <div>
            <Flex justify="center" align="center">
        <Col span={8}>
        <PhForm onSubmit={onSubmit}  >


            <PHSelect
             name="semesterRegistration"
             label="Semester Registration"
             options={semesterRegistrationOption}
             />
            <PHSelect
             name="academicFaculty"
             label="Academic Faculty"
             options={academicFacultiesOptions}
             />
            <PHSelect
             name="academicDepartment"
             label="Academic Department"
             options={academicDepartmentOption}
             />

<PHSelectWatch
 onValueChange={setCourseId} 
 label="Course" 
 name="course" 
 options={courseOption} 
   />
            <PHSelect
             name="faculty"
             label="Faculty"
             options={facultiesOption}
             disabled={!courseId ||fatchingFaculties}
             />


       
        
         <PhInput type="text" name="section" label="Section" disabled={!courseId} />
         <PhInput type="text" name="maxCapacity" label="Max Capacity" disabled={!courseId} />

         <PHSelect 
            mode="multiple"
            options={weekDaysOptions}
            name='days'
            label="Days"
         />

<PHTimePicker name="startTime" label="Start Time" />
<PHTimePicker name="endTime" label="End Time" />


         <Button htmlType="submit" >Submit</Button>
       </PhForm>
        </Col>
    </Flex>
       </div>
       </div>
   )
}

export default OfferCourses