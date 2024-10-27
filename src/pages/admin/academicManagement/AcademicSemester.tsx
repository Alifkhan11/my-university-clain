/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/fetures/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";



export type TTableData=Pick<TAcademicSemester,'name' | 'year' | 'startMonth' | 'endMonth'>



const AcademicSemester=()=>{
   const [params,setParams]=useState<TQueryParams[]|undefined>(undefined)
    const {data:semesterData,isLoading,isFetching}=useGetAllSemesterQuery(params)
    console.log(isLoading,semesterData);
    if(!semesterData || !semesterData.data){
        <p>Loading....................</p>
    }

    const tableData = semesterData?.data?.map(
      ({ _id, name, startMonth, endMonth, year }: any) => ({
        key:_id,
        name,
        startMonth,
        endMonth,
        year,
      })
    );
    
    const columns:TableColumnsType<TTableData>=[
      {
            title: 'Name',
            dataIndex: 'name',
            filters:[
              {
                text:'Summer',
                value:'Summer'
              },
              {
                text:'Autumn',
                value:'Autumn'
              },
              {
                text:'Fall',
                value:'Fall'
              },
            ]
          },
          {
            title: 'Year',
            dataIndex: 'year',
            filters:[
              {
                text:'2024',
                value:'2024'
              },
              {
                text:'2025',
                value:'2025'
              },
              {
                text:'2026',
                value:'2026'
              },
            ]
          },
          {
            title: 'Course Start Time',
            dataIndex: 'startMonth',
          },
          {
            title: 'Course End Time',
            dataIndex: 'endMonth',
          },
          {
            title:'Action',
            render:()=>{
              return (
                <div><Button>update</Button></div>
              )
            }
          }
    ]
    

   
  
    const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', {pagination, filters, sorter, extra});
        if(extra.action==='filter'){
          const queryParams:TQueryParams[]=[]
          filters.name?.forEach((item)=>
          queryParams.push({name:"name",value:item})
          )
        
         filters.year?.forEach((item)=>
        queryParams.push({name:'year',value:item})
        )

          setParams(queryParams)
          
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
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
       </div>
   )
}

export default AcademicSemester