import { TQueryParams, TResponseRedux, TStudent } from "../../../types";
import { baseApi } from "../../api/baseApi";

const useManagementAPI=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllStudent:builder.query({
            query:(args)=>{
                const params=new URLSearchParams()
                console.log(params,args);
                
                if(args){
                    args.forEach((item : TQueryParams )=> {
                         params.append(item.name,item.value as string)
                    });
                }
               return {
                url:`/students`,
                method:'GET',
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
        addStudent:builder.mutation({
            query:(data)=>({
                url:`/users/create-student`,
                method:'POST',
                body:data
            })
        })





    })
})


export const { useAddStudentMutation,useGetAllStudentQuery }=useManagementAPI