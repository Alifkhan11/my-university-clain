/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHSelect from "../../../components/form/PhSelect";
import { bloodGroupOption, genderOption } from "../../../constants/global";
import PhDatePicker from "../../../components/form/PhDatePicker";
import {  useGetAcademicDepartmentQuery, useGetAllSemesterQuery } from "../../../redux/fetures/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/fetures/admin/userManagementApi";



  //! This is only for development
  //! Should be removed
  const studentDefaultValues = {
    name: {
      firstName: 'I am ',
      middName: 'Student',
      lestName: 'Number ',
    },
    gender: 'male',
    email:'rita300501@gmail.com',
    bloodGroup: '---Slect Option---',

    contactNo: '1235678',
emargencyContactNo: '987-654-3210',
permanentAddres: '123 Main St, Cityville',
presentAddress: '456 Oak St, Townsville',
// dathOfBirth:'10-10-2000',

    guardian: {
      fatherName: 'James Doe',
      fatherOccupation: 'Engineer',
      fatherContactNo: '111-222-3333',
      motherName: 'Mary Doe',
      motherOccupation: 'Teacher',
      motherContactNo: '444-555-6666',
    },

    localGuardian: {
      name: 'Alice Johnson',
      occupation: 'Doctor',
      contactNo: '777-888-9999',
      address: '789 Pine St, Villageton',
    },

    admissionSemester: '--Select Option--',
    academicDepartment: '--Select Option',
  };


const CreateStudent = () => {
  const [addStudent,{data,error}]=useAddStudentMutation()
  const {data:sData,isLoading:sIsLoading}=useGetAllSemesterQuery(undefined)
  const {data:dData,isLoading:dIsLoading}=useGetAcademicDepartmentQuery(undefined)
  const dddd:any=dData?.data
  // eslint-disable-next-line no-unsafe-optional-chaining
  const departmentOptions = dddd?.map((item:any) => ({
    value: item._id,
    label: item.name,
  }));


  const semesterOption=sData?.data?.map(item=>({
    value:item._id as string,
    label:`${item.name} ${item.year}`
  }))
  




  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData={
      password:'student1234',
      Student:data
    }

    const fromData = new FormData()
    fromData.append('data',JSON.stringify(studentData))
    fromData.append('file', data.image)
console.log('data',studentData ,'file:',data.image);

    addStudent(fromData)

  }
console.log(`data"`,data,'  ',`error:`,error,);


  return (
    <Row justify='center'>
      <Col span={24}>
        <PhForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Divider>Personal Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="name.middName" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="name.lestName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect options={genderOption} name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              {/* <PhInput type="text" name="dateOfBirth" label="Date of Birth" /> */}
              <PhDatePicker name="dathOfBirth" label="Date Of Birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect options={bloodGroupOption} name="bloodGroup" label="Blood Group" />
            </Col>
          </Row>


          <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="contactNo" label="Contact" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="emargencyContactNo"
                label="Emergency Contact"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="permanentAddres"
                label="Permanent Address"
              />
            </Col>
          </Row>
          <Divider>Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father ContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother ContactNo"
              />
            </Col>
          </Row>
          <Divider>Local Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="localGuardian.name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="localGuardian.contactNo"
                label="Contact No."
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="localGuardian.address"
                label="Address"
              />
            </Col>
          </Row>
          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
               <PHSelect
                options={semesterOption}
                disabled={sIsLoading}
                name="admissionSemester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={departmentOptions}
                disabled={dIsLoading}
                name="academicDepartment"
                label="Admission Department"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
             <Controller
                name="image"
                render={({field:{onChange,value,...field}})=>(
                  <Form.Item label='Picture'>
                    <Input 
                    type="file"
                    value={value?.fileName}
                    {...field}
                    onChange={(e)=>onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
             
             />
            </Col>
          </Row>


          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;