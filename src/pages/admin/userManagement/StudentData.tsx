
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import {  TQueryParams, TStudent } from "../../../types";
import { useGetAllStudentQuery } from "../../../redux/fetures/admin/userManagementApi";
import { Link } from "react-router-dom";
import { useState } from "react";




export type TTableData=Pick<TStudent,'fullName' | 'id' | 'email' | 'contactNo'>











const StudentData=()=>{
    const [params,setParams]=useState<TQueryParams[]>([])
    const [page, setPage] = useState(0);
    const {data:studentData,isFetching}=useGetAllStudentQuery([
      { name: 'page', value: page },
      { name: 'sort', value: 'id' },
      { name: 'limit', value: 3 },
      ...params,
    ])
    console.log(page,params);
    

    if(!studentData || !studentData.data){
        <p>Loading....................</p>
    }
    
    const tableData = studentData?.data?.map(
      ({ _id, fullName, id,email,contactNo }: any) => ({
        key:_id,
        fullName,
        id,
        email,
        contactNo
      })
    );
    
    const columns:TableColumnsType<TTableData>=[
      {
            title: 'Name',
            key:'name',
            dataIndex:'fullName'
          
          },
          {
            title: 'Roll No',
            dataIndex: 'id',
            key:'id'
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key:'email'
          },
          {
            title: 'Contace No',
            dataIndex: 'contactNo',
            key: 'contactNo'
          },
          {
            title:'Action',
            key:'x',
            render:(item)=>{
              return (
                <Space>
                  <Link to={`/admin/student-data/${item.key}`}>
                  <Button> Details</Button>
                  </Link>
                  <Button>Updatw</Button>
                  <Button>Block</Button>
                </Space>
              )
            },
            width:'1%'
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



    const onChange: TableProps<TTableData>['onChange'] = (
      _pagination,
      filters,
      _sorter,
      extra
    ) => {
      if (extra.action === 'filter') {
        const queryParams: TQueryParams[] = [];
  
        filters.name?.forEach((item) =>
          queryParams.push({ name: 'name', value: item })
        );
  
        filters.year?.forEach((item) =>
          queryParams.push({ name: 'year', value: item })
        );
        setParams(queryParams);
      }
    };
   

   return (
       <div>
           <Table<TTableData>
          //  <Table<DataType>
    columns={columns}
    dataSource={tableData}
    // dataSource={data}
    onChange={onChange}
    loading={isFetching}
    pagination={false}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
  <Pagination
        current={page}
        onChange={value => setPage(value)}
        pageSize={studentData?.meta?.limit}
        total={studentData?.meta?.total}
      />
       </div>
   )
}

export default StudentData