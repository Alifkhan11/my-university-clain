import { TQueryParams,  TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const studentCourseApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllOfferCourses:builder.query({
            query:(args)=>{
                console.log(args);
                const params=new URLSearchParams()
                if(args){
                    args.forEach((item:TQueryParams)=>{
                        params.append(item.name,item.value as string)
                    })
                }

                return{
                    url:'/offered-course/my-offered-courses',
                    method:"GET",
                    params:params
                }
                
            },
            providesTags:['offeredCourse'],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            transformResponse:(response:TResponseRedux<any>)=>{
                return{
                    data:response.data,
                    meta:response.meta
                }
            }
        }),


        enrolCourse:builder.mutation({
            query:(data)=>{
                return{
                    url:`/enrolled-course/create-enrolled-course`,
                    method:'POST',
                    body:data
                }
            },
            invalidatesTags:['offeredCourse']
        }),

        getAllEnrollCourses:builder.query({
            query:(args)=>{
                console.log(args);
                const params=new URLSearchParams()
                if(args){
                    args.forEach((item:TQueryParams)=>{
                        params.append(item.name,item.value as string)
                    })
                }

                return{
                    url:'/enrolled-course/my-enrolled-courses',
                    method:"GET",
                    params:params
                }
                
            },
            providesTags:['offeredCourse'],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            transformResponse:(response:TResponseRedux<any>)=>{
                return{
                    data:response.data,
                    meta:response.meta
                }
            }
        }),




    })
})

export const {
    useGetAllOfferCoursesQuery,
    useEnrolCourseMutation,
    useGetAllEnrollCoursesQuery
    }=studentCourseApi