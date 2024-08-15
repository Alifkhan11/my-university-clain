import { baseApi } from "../../api/baseApi";

const academicSemesterApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllSemester:builder.query({
            query:()=>({
                url:`/academic-semister/`,
                method:'GET'
            })
        })
    })
})

export const {useGetAllSemesterQuery}=academicSemesterApi