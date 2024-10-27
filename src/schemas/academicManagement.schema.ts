import { z } from "zod";

export const academicSemesterSchema=z.object({
    name:z.string({required_error:'Please Select Semester Name'}),
    year:z.string({required_error:'Please Select Year'}),
    startMonth:z.string({required_error:'Please Select Start Month'}),
    endMonth:z.string({required_error:'Please Select End Month'})
    })