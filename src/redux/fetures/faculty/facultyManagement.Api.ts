import { TQueryParams } from './../../../types/global';
import { baseApi } from "../../api/baseApi";

const facultyManagementAPI=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllFacultiesCourse:builder.query({
            query:(args)=>{
                const params=new URLSearchParams()
                if(args){
                    args.forEach((element:TQueryParams) => {
                        params.append(element.name,element.value as string)
                    });
                }
                return{
                    url:'',
                    method:"GET",
                    params:params
                }
            }
        })

    })
})

export const {
    useGetAllFacultiesCourseQuery
} = facultyManagementAPI