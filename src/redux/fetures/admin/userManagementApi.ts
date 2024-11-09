import { TQueryParams, TResponseRedux, TStudent } from "../../../types";
import { baseApi } from "../../api/baseApi";

const useManagementAPI=baseApi.injectEndpoints({
    endpoints:(builder)=>({

        getAllStudent:builder.query({
            query:(args)=>{
                const params=new URLSearchParams()
                
                if(args){
                    args.forEach((item : TQueryParams )=> {
                        params.append(item.name,item.value as string)
                    });
                }
                
                console.log('params',params,'args',args);
               return {
                url:`/students`,
                method:'GET',
                params:params
}
            },
            transformResponse:(response:TResponseRedux<TStudent[]>)=>{
                console.log(response.data,
                    response.meta);
                
                return {
                    data:response.data,
                    meta:response.meta
                }
                
            }
        }),
        getSingleStudent:builder.query({
            query:(args)=>{
                console.log('args',args);
               return {
                url:`/students`,
                method:'GET',
                params:args
}
            },
        }),

        addStudent:builder.mutation({
            query:(data)=>({
                url:`/users/create-student`,
                method:'POST',
                body:data
            })
        }),


        getAllFaculties:builder.query({
            query:(args)=>{
                console.log(args);
                return{
                    url:`/faculty`,
                    method:'GET'
                }
            },
            transformResponse:(response:TResponseRedux<TStudent[]>)=>{
                return{
                    data:response.data,
                    meta:response.meta
                }
            }
        })



    })
})


export const { 
    useAddStudentMutation,
    useGetAllStudentQuery ,
    useGetSingleStudentQuery,
    useGetAllFacultiesQuery
}=useManagementAPI