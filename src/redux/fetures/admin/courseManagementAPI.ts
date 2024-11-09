import {  TQueryParams, TResponseRedux } from "../../../types";
import { TCourse, TSemester } from "../../../types/courseManagement";
import { baseApi } from "../../api/baseApi";

const CourseManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllRegistrationSemester:builder.query({
            query:()=>{
               return {
                url:`/semester-registrations`,
                method:'GET',
                }
            },
            providesTags:['Semester'],
            transformResponse:(response:TResponseRedux<TSemester[]>)=>{
                return {
                    data:response.data,
                    meta:response.meta
                }
                
            }
        }),
        addRegistrationSemester:builder.mutation({
            query:(data)=>({
                url:`/semester-registrations/create-semester-registration`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['Semester']
        }),
        updateRegistrationSemester:builder.mutation({
            query:(data)=>{
                return{
                    url:`/semester-registrations/${data.id}`,
                    method:'PATCH',
                    // params:data.id,
                    body:data.data
                }
            },
            invalidatesTags:['Semester']
        }),
        getAllCourses:builder.query({
            query:(args)=>{
                const params=new URLSearchParams()
                if(args){
                    args.forEach((element:TQueryParams) => {
                        params.append(element.name,element.value as string)
                    });
                }
                return{
                    url:`/course`,
                    method:'GET',
                    // params:data.id,
                    // body:params
                }
            },
            providesTags:['Course'],
            transformResponse:(response:TResponseRedux<TCourse[]>)=>{
                return{
                    data:response.data,
                    meta:response.meta
                }
            }
        }),


        addCourse:builder.mutation({
            query:(data)=>{
                return{
                    url:`/course/create-course`,
                    method:'POST',
                    body:data
                }
            },
            invalidatesTags:['Course']
        }),

    
        addFaculties:builder.mutation({
            query:(args)=>{
                return{
                    url:`/course/${args.courseId}/assign-faculties`,
                    method:'PUT',
                    body:args.data
                }
            },
            invalidatesTags:['Course']
        })
      ,
      createOfferCourse:builder.mutation({
        query:(data)=>{
            return{
                url:`/offered-course/create-offered-course`,
                method:"POST",
                body:data
            }
        },
        invalidatesTags:['Course']
      }),

      getCourseFaculties:builder.query({
        query:(id)=>{
            return {
                url:`/course/${id}/get-faculties`,
                method:'GET'
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transformResponse:(response:TResponseRedux<any>)=>{
            return{
                data:response.data,
                meta:response.meta
            }
        }
      })


    })
})

export const {
    useAddRegistrationSemesterMutation,
    useGetAllRegistrationSemesterQuery,
    useUpdateRegistrationSemesterMutation,
    useGetAllCoursesQuery,
    useAddCourseMutation,
    useAddFacultiesMutation,
    useCreateOfferCourseMutation,
    useGetCourseFacultiesQuery
}=CourseManagementApi