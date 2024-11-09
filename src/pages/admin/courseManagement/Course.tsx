/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Table, TableColumnsType } from "antd"
import { useAddFacultiesMutation, useGetAllCoursesQuery } from "../../../redux/fetures/admin/courseManagementAPI"
import { TCourse } from "../../../types/courseManagement"
import { useState } from "react"
import { useGetAllFacultiesQuery } from "../../../redux/fetures/admin/userManagementApi"
import PhForm from "../../../components/form/PhForm"
import PHSelect from "../../../components/form/PhSelect"


export type TTableData=Pick<TCourse , 'title'|'prefix'|'code'>


const Course=()=>{
    const {data:allCourses,isFetching}=useGetAllCoursesQuery(undefined)

    const tableData:TTableData[] = allCourses?.data?.map(
      ({ _id,title,prefix ,code }: any) => ({
        key:_id,
        title,
        prefix,
        code
       
      })
    )||[]

   
    const columns:TableColumnsType<TTableData>=[
      {
            title: 'Name',
            key:'title',
            dataIndex: 'title',
          },
          {
            title: 'Prefix',
            dataIndex: 'prefix',
            key:"prefix"
          },
          {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
          },
          {
            title:'Action',
            render:(item)=>{
              return (
                    <AddFacultyModal data={item}/>
              )
            }
          }
    ]
    


   return (
       <div>
           <Table<TTableData>
    columns={columns}
    dataSource={tableData}
    // onChange={onChange}
    loading={isFetching}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
       </div>
   )
}




// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddFacultyModal=({data}:any)=>{
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data:facultyData}=useGetAllFacultiesQuery(undefined)
    const [addFaculties]=useAddFacultiesMutation()

    // console.log(data,'faculty:',facultyData?.data);

    const facultiesOption=facultyData?.data?.map((item)=>({
      value:item._id,
      label:item.fullName
    }))
    

  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const hendleSubmit=async(datas: any)=>{
    const facultiesData={
      courseId:data.key,
      data:datas
    }
    console.log(facultiesData);
    
    const submitFaculty= await addFaculties(facultiesData)
    console.log(submitFaculty);
    // console.log(datas.faculties);
    
    
  }

  return (
    <>
      <Button onClick={showModal}>
        Assign Faculty
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer >
        <PhForm onSubmit={hendleSubmit} >
          <PHSelect mode="multiple" options={facultiesOption} label="Faculty" name='faculties'/>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Modal>
    </>
  );
}


export default Course