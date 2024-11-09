/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../../types/academicManagement.type";
import {  TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllSemester:builder.query({
            query:(args)=>{
                const params=new URLSearchParams()
                if(args){
                    args.forEach((item : TQueryParams )=> {
                        params.append(item.name,item.value as string)
                    });
                }
               return {
                url:`/academic-semister`,
                method:'GET',
                params:params
}
            },
            transformResponse:(response:TResponseRedux<TAcademicSemester[]>)=>{
                return {
                    data:response.data,
                    meta:response.meta
                }
                
            }
        }),
        addAcademicSemester:builder.mutation({
            query:(data)=>({
                url:`/academic-semister/create-academic-semester`,
                method:'POST',
                body:data
            })
        }),
        addAcademicDepartment:builder.mutation({
            query:(data)=>({
                url:`/academic-department/create-academic-department`,
                method:'POST',
                body:data
            })
        }),
        getAcademicDepartment:builder.query({
            query:()=>{
                return {
                url:`/academic-department`,
                method:'GET',
                }
            },
            transformResponse:(response:TResponseRedux<TAcademicDepartment[]>)=>{
                return {
                    data:response.data,
                    meta:response.meta
                }
            }
        }),

        getAcademicFaculties:builder.query({
            query:()=>{
                return{
                    url:`/academic-faculty`,
                    method:'GET'
                }
            },
            transformResponse:(response:TResponseRedux<TAcademicFaculty[]>)=>{
                return{
                    data:response.data,
                    meta:response.meta
                }
            }
        })





    })
})

export const {
    useGetAllSemesterQuery,
    useAddAcademicSemesterMutation,
    useAddAcademicDepartmentMutation,
    useGetAcademicDepartmentQuery,
    useGetAcademicFacultiesQuery
}=academicManagementApi