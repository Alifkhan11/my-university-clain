/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, Table, TableColumnsType, } from "antd";
// import { useState } from "react";
import { useGetAllRegistrationSemesterQuery, useUpdateRegistrationSemesterMutation } from "../../../redux/fetures/admin/courseManagementAPI";
import moment from "moment";
import { TSemester } from "../../../types/courseManagement";
import { useState } from "react";


export type TTableData=Pick<TSemester, 'status' | 'startDate' | 'endDate'>



const items=[
    {
        label: 'Upcoming',
        key: 'UPCOMING',
      },
      {
        label: 'Ongoing',
        key: 'ONGOING',
      },
      {
        label: 'Ended',
        key: 'ENDED',
      },
]


const RegistertSemester=()=>{
    const [semesterId,setSemesterId]=useState('')
    const {data:registerSemester,isFetching}=useGetAllRegistrationSemesterQuery(undefined)
    const [updateStatus]=useUpdateRegistrationSemesterMutation()
    if(!registerSemester){
        return  <p>Loding....</p>

    }
    // console.log(registerSemester.data);
    

    const tableData:TTableData[] = registerSemester?.data?.map(
      ({ _id, academicSemester, startDate, endDate, status }: any) => ({
        key:_id,
        name:`${academicSemester?.name} ${academicSemester?.year}`,
        startDate:moment(new Date(startDate)).format('MMMM'),
        endDate:moment(new Date(endDate)).format('MMMM'),
        status,
      })
    )||[]

    const handelStatusUpdate=(data:any)=>{
        const updateData={
            id:semesterId,
            data:{
                status:data.key
            }
        }
        updateStatus(updateData)
        
    }

    const menuProps={
        items,
        onClick:handelStatusUpdate
    }

    const columns:TableColumnsType<TTableData>=[
      {
            title: 'Name',
            key:'name',
            dataIndex: 'name',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key:"status",
            render:(item)=>{
                const color=item==='UPCOMING'?'blue' : item==="ONGOING"?'green' : 'red'
                return <span style={{color}}> {item}</span>
            }
          },
          {
            title: 'Start Date',
            dataIndex: 'startDate',
            key:"startDate"
          },
          {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
          },
          {
            title:'Action',
            render:(item)=>{
              return (
                <Dropdown menu={menuProps} trigger={['click']} >
                    <Button onClick={() => setSemesterId(item.key)}>Update</Button>
                </Dropdown>
              )
            }
          }
    ]
    

   


  
    // const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
    //     console.log('params', {pagination, filters, sorter, extra});
    //     if(extra.action==='filter'){
    //       const queryParams:TQueryParams[]=[]
    //       filters.name?.forEach((item)=>
    //       queryParams.push({name:"name",value:item})
    //       )
        
    //      filters.year?.forEach((item)=>
    //     queryParams.push({name:'year',value:item})
    //     )

    //       setParams(queryParams)
          
    //     }
    //   };
   

   return (
       <div>
           <Table<TTableData>
          //  <Table<DataType>
    columns={columns}
    dataSource={tableData}
    // dataSource={data}
    // onChange={onChange}
    loading={isFetching}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
       </div>
   )
}


export default RegistertSemester